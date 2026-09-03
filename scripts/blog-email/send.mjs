#!/usr/bin/env node
/**
 * Thursday blog email.
 *
 * Reads the site's RSS feed, and if a post went live today, builds a Klaviyo
 * campaign for it and schedules it for 9:15am Eastern. If the run arrives
 * after 9:15am, it schedules for the next quarter hour instead, so a late
 * publish still gets announced the same day.
 *
 * The order matters: the post is published by the Netlify scheduled build, and
 * this only announces it. Every guard below exists so that a subscriber never
 * receives a link to a page that is not there.
 *
 *   node scripts/blog-email/send.mjs --dry-run   plan only, no writes
 *   node scripts/blog-email/send.mjs             create and schedule
 *
 * Requires KLAVIYO_API_KEY in the environment (a private key, pk_...).
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));

const SITE = "https://kingadow.com";
// Overridable so the whole path can be exercised against a local dev server
// without waiting for a real Thursday.
const FEED_URL = process.env.BLOG_EMAIL_FEED_URL ?? `${SITE}/rss.xml`;
const KLAVIYO_REVISION = "2024-10-15";
const LIST_ID = "SHnzMn"; // Blog Subscribers
const FROM_EMAIL = "kinga@kingadow.com";
const FROM_LABEL = "Kinga Dow";
const SEND_HOUR = 9;
const SEND_MINUTE = 15;
const SEND_TZ = "America/New_York";

/**
 * When the run arrives after the send time, schedule for the next quarter
 * hour at least this many minutes out rather than giving up. Free-tier cron
 * runs have been seen queued for ten hours, and a late email beats none.
 */
const LATE_LEAD_MINUTES = 5;
const QUARTER_HOUR_MS = 15 * 60_000;

/** How long to keep checking for today's post before giving up, in minutes. */
const WAIT_FOR_POST_MINUTES = 40;
const POLL_INTERVAL_MS = 120_000;

const DRY_RUN = process.argv.includes("--dry-run");
const API_KEY = process.env.KLAVIYO_API_KEY;

// ---------------------------------------------------------------- helpers

const log = (...a) => console.log(...a);

function decodeXml(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decodeXml(m[1]) : null;
}

/**
 * Offset of `tz` from UTC at a given instant, in milliseconds.
 * Positive east of Greenwich. Used to resolve a wall-clock time in a zone that
 * observes DST without pulling in a date library.
 */
function tzOffsetMs(date, tz) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value])
  );
  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second)
  );
  return asUtc - date.getTime();
}

/** The instant at which it is `hh:mm` on `y-m-d` in `tz`. */
function zonedTimeToUtc(y, m, d, hh, mm, tz) {
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  // Two passes: the first offset is read at the wrong instant if the guess
  // lands on the other side of a DST boundary, the second settles it.
  let result = new Date(guess - tzOffsetMs(new Date(guess), tz));
  result = new Date(guess - tzOffsetMs(result, tz));
  return result;
}

/**
 * The first quarter hour (:00, :15, :30, :45) at least `leadMs` after `from`.
 * Quarter hours line up across any zone whose offset is a whole number of
 * hours, which Eastern is, so rounding the UTC timestamp is enough.
 */
function nextQuarterHour(from, leadMs) {
  return new Date(Math.ceil((from.getTime() + leadMs) / QUARTER_HOUR_MS) * QUARTER_HOUR_MS);
}

/** Calendar date of `at` (default now) in `tz`, as { y, m, d } and an ISO yyyy-mm-dd. */
function dateIn(tz, at = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .formatToParts(at)
      .map((p) => [p.type, p.value])
  );
  return {
    y: Number(parts.year),
    m: Number(parts.month),
    d: Number(parts.day),
    iso: `${parts.year}-${parts.month}-${parts.day}`,
  };
}

async function klaviyo(path, { method = "GET", body } = {}) {
  const res = await fetch(`https://a.klaviyo.com${path}`, {
    method,
    headers: {
      Authorization: `Klaviyo-API-Key ${API_KEY}`,
      revision: KLAVIYO_REVISION,
      accept: "application/vnd.api+json",
      ...(body ? { "content-type": "application/vnd.api+json" } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Klaviyo ${method} ${path} -> ${res.status}\n${text}`);
  }
  return text ? JSON.parse(text) : null;
}

// ---------------------------------------------------------------- steps

async function newestPost() {
  const res = await fetch(FEED_URL, { headers: { "cache-control": "no-cache" } });
  if (!res.ok) throw new Error(`Feed returned ${res.status}`);
  const xml = await res.text();

  const first = xml.match(/<item>([\s\S]*?)<\/item>/);
  if (!first) return null;
  const item = first[1];

  const link = tag(item, "link");
  if (!link) return null;

  return {
    title: tag(item, "title") ?? "",
    excerpt: tag(item, "description") ?? "",
    url: link,
    slug: link.replace(/\/$/, "").split("/").pop(),
    category: tag(item, "category") ?? "",
    image: tag(item, "image"),
    // The feed's pubDate comes from a date-only frontmatter field, so it
    // serialises as midnight UTC. Comparing its UTC calendar date against
    // today's Eastern date is correct; converting it into Eastern first would
    // read as the previous evening and never match.
    pubDateIso: tag(item, "pubDate")
      ? new Date(tag(item, "pubDate")).toISOString().slice(0, 10)
      : null,
  };
}

async function isLive(url) {
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow" });
    return res.ok;
  } catch {
    return false;
  }
}

async function alreadySent(campaignName) {
  const res = await klaviyo(
    `/api/campaigns/?filter=${encodeURIComponent(
      "equals(messages.channel,'email')"
    )}&sort=-created_at&fields%5Bcampaign%5D=name`
  );
  return (res.data ?? []).some((c) => c.attributes?.name === campaignName);
}

async function buildTemplate(post, campaignName) {
  // Drop the authoring notes at the top of the file. Only the leading comment
  // is removed, never all comments: MSO conditional comments are load-bearing
  // in email HTML and must survive.
  const base = (await readFile(join(HERE, "template.html"), "utf8")).replace(
    /^\s*<!--[\s\S]*?-->\s*/,
    ""
  );

  // Most email clients will not render SVG, and a good share of the post
  // images on this site are SVG. Better no hero than a broken one.
  const imageBlock =
    post.image && !post.image.toLowerCase().endsWith(".svg")
      ? `<tr><td style="padding:0;"><a href="${post.url}"><img src="${post.image}" width="600" alt="${escapeHtml(
          post.title
        )}" style="display:block; width:100%; max-width:600px; height:auto; border:0;" /></a></td></tr>`
      : "";

  const html = base
    .replace(/\[\[POST_TITLE\]\]/g, escapeHtml(post.title))
    .replace(/\[\[POST_EXCERPT\]\]/g, escapeHtml(post.excerpt))
    .replace(/\[\[POST_URL\]\]/g, post.url)
    .replace(/\[\[POST_CATEGORY\]\]/g, escapeHtml(post.category))
    .replace(/\[\[IMAGE_BLOCK\]\]/g, imageBlock);

  const leftover = html.match(/\[\[[A-Z_]+\]\]/g);
  if (leftover) throw new Error(`Unreplaced tokens: ${[...new Set(leftover)].join(", ")}`);

  const res = await klaviyo("/api/templates/", {
    method: "POST",
    body: {
      data: {
        type: "template",
        attributes: {
          name: campaignName,
          editor_type: "CODE",
          html,
        },
      },
    },
  });
  return res.data.id;
}

async function createCampaign(post, campaignName, sendAt) {
  const res = await klaviyo("/api/campaigns/", {
    method: "POST",
    body: {
      data: {
        type: "campaign",
        attributes: {
          name: campaignName,
          audiences: { included: [LIST_ID] },
          // Verified against revision 2024-10-15: the datetime lives inside
          // options_static, not alongside `method`. is_local false means one
          // absolute UTC send rather than 9:15 in each recipient's own zone.
          send_strategy: {
            method: "static",
            options_static: {
              datetime: sendAt.toISOString(),
              is_local: false,
            },
          },
          send_options: { use_smart_sending: false },
          tracking_options: {
            is_tracking_opens: true,
            is_tracking_clicks: true,
            add_tracking_params: true,
            custom_tracking_params: [
              { type: "static", name: "utm_source", value: "klaviyo" },
              { type: "static", name: "utm_medium", value: "email" },
              { type: "static", name: "utm_campaign", value: `blog-${post.slug}` },
            ],
          },
          "campaign-messages": {
            data: [
              {
                type: "campaign-message",
                // Also verified: on this revision `channel` and `content` sit
                // directly on attributes. Nesting them under `definition` is
                // the newer shape and is rejected here.
                attributes: {
                  channel: "email",
                  label: campaignName,
                  content: {
                    subject: post.title,
                    preview_text: post.excerpt.slice(0, 150),
                    from_email: FROM_EMAIL,
                    from_label: FROM_LABEL,
                    reply_to_email: FROM_EMAIL,
                  },
                },
              },
            ],
          },
        },
      },
    },
  });

  const campaignId = res.data.id;
  const messageId = res.data.relationships?.["campaign-messages"]?.data?.[0]?.id;
  if (!messageId) throw new Error("Campaign created but no message id came back");
  return { campaignId, messageId };
}

// ---------------------------------------------------------------- main

async function main() {
  if (!API_KEY && !DRY_RUN) {
    throw new Error("KLAVIYO_API_KEY is not set");
  }

  const today = dateIn(SEND_TZ);
  log(`Today in ${SEND_TZ}: ${today.iso}${DRY_RUN ? "  (dry run)" : ""}`);

  // Wait for the scheduled Netlify build to publish, rather than assuming it
  // has already run. Exiting quietly is the correct outcome on a week with no
  // post; a missing email is recoverable, a wrong one is not.
  const deadline = Date.now() + WAIT_FOR_POST_MINUTES * 60_000;
  let post = null;
  for (;;) {
    post = await newestPost();
    if (post && post.pubDateIso === today.iso) break;
    log(`Newest post is ${post?.slug ?? "none"} (${post?.pubDateIso ?? "?"}). Not today's.`);
    if (Date.now() >= deadline) {
      log("No post published today. Nothing to send.");
      return;
    }
    log(`Waiting ${POLL_INTERVAL_MS / 1000}s for the build...`);
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
  }

  log(`Found: ${post.slug}`);
  log(`  title:    ${post.title}`);
  log(`  url:      ${post.url}`);
  log(`  image:    ${post.image ?? "(none)"}`);

  if (!(await isLive(post.url))) {
    throw new Error(`Post is in the feed but ${post.url} is not reachable. Not sending.`);
  }
  log("  live:     yes");

  const campaignName = `Blog: ${post.slug} (${today.iso})`;
  let sendAt = zonedTimeToUtc(today.y, today.m, today.d, SEND_HOUR, SEND_MINUTE, SEND_TZ);
  log(`  send at:  ${sendAt.toISOString()} (9:15am ${SEND_TZ})`);

  if (sendAt.getTime() < Date.now()) {
    // The publish cron has fired as late as 20:01 UTC, ten hours after its
    // slot. Klaviyo rejects a send time in the past, and stopping here left
    // the 27 Aug 2026 post unannounced under a green workflow. Send later the
    // same day instead: the post is live either way, so the only cost is a
    // less predictable arrival time. Past midnight Eastern the campaign name
    // and the post date would no longer agree, and that is a failure rather
    // than a quiet return, so the miss shows in the Actions tab.
    sendAt = nextQuarterHour(new Date(), LATE_LEAD_MINUTES * 60_000);
    if (dateIn(SEND_TZ, sendAt).iso !== today.iso) {
      throw new Error(
        `9:15am ${SEND_TZ} has passed and the next slot (${sendAt.toISOString()}) falls on the next day. Not sending.`
      );
    }
    log(`  late run: 9:15am ${SEND_TZ} has passed. Sending at ${sendAt.toISOString()} instead.`);
  }

  if (DRY_RUN) {
    log(`\nWould create campaign "${campaignName}" to list ${LIST_ID}. No writes made.`);
    return;
  }

  if (await alreadySent(campaignName)) {
    log(`Campaign "${campaignName}" already exists. Nothing to do.`);
    return;
  }

  const templateId = await buildTemplate(post, campaignName);
  log(`Template created: ${templateId}`);

  const { campaignId, messageId } = await createCampaign(post, campaignName, sendAt);
  log(`Campaign created: ${campaignId}`);

  await klaviyo("/api/campaign-message-assign-template/", {
    method: "POST",
    body: {
      data: {
        type: "campaign-message",
        id: messageId,
        relationships: { template: { data: { type: "template", id: templateId } } },
      },
    },
  });
  log("Template assigned");

  await klaviyo("/api/campaign-send-jobs/", {
    method: "POST",
    body: { data: { type: "campaign-send-job", id: campaignId } },
  });
  log(`Scheduled for ${sendAt.toISOString()}`);
  log(`Review or cancel: https://www.klaviyo.com/campaign/${campaignId}/wizard`);
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});

# How to Add a Blog Post

Adding a new post is two files:
1. A markdown file in `src/content/blog/{slug}.md`
2. A featured image in `public/images/blog/{slug}.{png|jpg}`

That's it. No code changes, no array updates. Astro picks it up automatically on the next build.

---

## Step 1 — Create the markdown file

Filename = the URL slug. So `gap-between-using-ai-and-having-ai-workflows.md` becomes `https://kingadow.com/blog/gap-between-using-ai-and-having-ai-workflows`.

Use this template:

```markdown
---
title: "Your Post Title Here"
date: 2026-04-26
author: "Kinga Dow"
category: "AI Systems"
excerpt: "A 1-2 sentence summary used on the listing card and as the default meta description."
image: "/images/blog/your-slug.png"
imageAlt: "Plain-English description of the image for screen readers and SEO."
keywords:
  - "primary keyword"
  - "secondary keyword"
  - "another keyword"
featured: false
draft: false
# Optional overrides — only set if SEO spec calls for something different from defaults
metaTitle: "Custom Title for the Browser Tab and Search Result | Kinga Dow"
metaDescription: "Custom meta description if it should differ from excerpt."
updated: 2026-05-15  # only set when republishing with changes
ogImage: "/images/blog/your-slug-og.png"  # only if OG image differs from main image
---

Write your post body in markdown.

## Use H2 for major sections

Paragraphs are just paragraphs separated by blank lines.

### H3 for subsections

- Bullet lists like this
- **Bold** for emphasis
- *Italic* for softer emphasis
- [Inline links](/services) work as expected

1. Numbered lists
2. Also work
3. As you'd expect

> Blockquotes render in navy with a gold left border.

---

A horizontal rule renders as a thin separator.
```

---

## Step 2 — Add the featured image

Drop the image into `public/images/blog/`. Recommended specs:

- **Filename:** matches the slug (e.g. `gap-ai-workflows.png`)
- **Aspect ratio:** 16:9 — used at full width on the post hero, cards, and OG share previews
- **Dimensions:** 1200×630px (Open Graph standard, also the spec for hero images)
- **Format:** PNG, JPG, or GIF
- **File size:** ideally under 300KB — current images range 250KB–1.3MB; the larger ones slow page load

Reference the image in frontmatter as `/images/blog/{filename}` (the `public/` prefix is dropped — Astro serves `public/` at the site root).

---

## Frontmatter field reference

| Field | Required | Description | Default if omitted |
|---|---|---|---|
| `title` | yes | Post title shown in hero, cards, browser tab, and OG. | — |
| `date` | yes | Publish date (`YYYY-MM-DD`). Drives sort order, datePublished schema, and article:published_time. | — |
| `author` | yes | Author display name. Must match a name in the `authorRegistry` in `src/pages/blog/[slug].astro` for the JSON-LD Person object to include jobTitle/sameAs links. To add a new author, add an entry to that registry. | — |
| `category` | yes | Free-text category. Currently used: `AI Systems`, `Email Marketing`, `eCommerce`, `Klaviyo`. Drives the listing filter pills and related-posts logic. | — |
| `excerpt` | yes | 1-2 sentence summary. Used on the listing card AND as the default meta description if `metaDescription` is not set. | — |
| `image` | yes | Path to the hero image, relative to site root (e.g. `/images/blog/foo.png`). | — |
| `imageAlt` | no | Plain-English description for screen readers and SEO. | falls back to title |
| `keywords` | no | String array. Goes into the `<meta name="keywords">` tag and the BlogPosting JSON-LD `keywords` field. | empty array |
| `featured` | no | If `true`, the post appears in the Featured Posts grid at the top of the listing (max 2 featured at a time — most recent two win). | `false` |
| `draft` | no | If `true`, the post is excluded from the listing, RSS feed, and route generation. Use this to stage a post before its image arrives, or to hold a post for a launch date. | `false` |
| `metaTitle` | no | Override the browser tab + search result title. | `{title} \| Kinga Dow Blog` |
| `metaDescription` | no | Override the meta description and OG/Twitter description. | falls back to excerpt |
| `updated` | no | Republish date. Sets `dateModified` in JSON-LD and `article:modified_time`. | falls back to `date` |
| `ogImage` | no | Override the OG/Twitter share image if different from the hero image. | falls back to `image` (made absolute) |

---

## What happens automatically (don't put these in frontmatter)

The build derives all of this from the file or content — never write them yourself:

- **URL slug** — from the filename
- **Canonical URL** — `https://www.kingadow.com/blog/{slug}`
- **Word count + reading time** — counted from the markdown body, divided by 225 wpm
- **Open Graph tags** — built from title, excerpt/metaDescription, image, date
- **Twitter Card tags** — same
- **BlogPosting JSON-LD** — built from frontmatter + body wordCount + Person registry + Org constant
- **BreadcrumbList JSON-LD** — built from category + slug
- **Organization JSON-LD** — site-wide, lives in `src/layouts/Layout.astro`
- **RSS feed entry** — `/rss.xml` regenerates on build

---

## Pre-publish checklist

Before you flip `draft: false`:

- [ ] Title under ~60 chars (so it doesn't get truncated in search results)
- [ ] Excerpt / metaDescription under ~155 chars
- [ ] Image exists at the path in frontmatter
- [ ] Image alt text describes what's actually in the image
- [ ] Category matches one of the existing values (or you've decided to add a new one)
- [ ] At least 3-5 keywords listed
- [ ] Body uses `##` for major sections (not `#` — `#` is reserved for the title, which is rendered from frontmatter, not the body)
- [ ] Internal links use relative paths (`/services`, `/contact`) not absolute URLs
- [ ] Run `npm run dev` locally and skim the post in the browser

---

## Adding a new author

Edit `src/pages/blog/[slug].astro` — find `authorRegistry` near the top of the frontmatter block, add an entry:

```typescript
"New Author Name": {
  name: "New Author Name",
  url: "https://...",                  // optional — author profile/bio page
  jobTitle: "Their Role",              // optional — appears in JSON-LD
  sameAs: ["https://linkedin.com/..."], // optional — social profiles
},
```

If a post uses an author name that isn't in the registry, the JSON-LD just falls back to `{ name }` — nothing breaks, but you lose the structured data for that author's credentials.

---

## Adding a new category

Categories are free-text — just use a new value in the `category` field. The listing filter pills auto-update from whatever categories exist across all non-draft posts.

If you want to enforce a closed set of categories (to prevent typos), edit the schema in `src/content.config.ts` — change `category: z.string()` to `category: z.enum(["Email Marketing", "eCommerce", "Klaviyo", "AI Systems", "New Category"])`.

---

## Deploying

The site auto-deploys on push to `main`. Per [CLAUDE.md](../../CLAUDE.md), Netlify charges 15 credits per production deploy — batch multiple posts or fixes into one push when possible.

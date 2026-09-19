import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/**
 * Posts the production site should show.
 *
 * Two gates:
 *   - `draft: true`  never publishes. Work in progress.
 *   - a `date` in the future is scheduled, and appears on that date's build.
 *
 * Scheduled posts stay visible in `astro dev` so they can be reviewed before
 * they go out.
 *
 * Every place that lists posts must use this. Repeating the filter inline is
 * how a scheduled post ends up leaking into the RSS feed or the sitemap while
 * being correctly hidden from the blog index.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const now = Date.now();
  return getCollection("blog", ({ data }) => {
    if (data.draft) return false;
    if (import.meta.env.DEV) return true;
    return data.date.valueOf() <= now;
  });
}

/**
 * Posts that are approved and dated in the future, soonest first. Feeds the
 * "Upcoming posts" schedule on the blog index.
 *
 * Unlike getPublishedPosts, this ignores dev mode: the schedule should look
 * the same locally as it will in production. A post leaves this list on the
 * same build that publishes it, so the two can never disagree.
 */
export async function getUpcomingPosts(limit = 5): Promise<Post[]> {
  const now = Date.now();
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && data.date.valueOf() > now
  );
  return posts
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf())
    .slice(0, limit);
}

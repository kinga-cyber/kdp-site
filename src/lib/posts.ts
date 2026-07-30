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
 * Sort key for listings. A refreshed post is the newest thing on the site and
 * should read that way, so `updated` wins over the original publication date.
 */
export const freshness = (p: Post) => (p.data.updated ?? p.data.date).valueOf();

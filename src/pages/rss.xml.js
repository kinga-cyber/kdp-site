import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
  // Must use the same gate as the rest of the site, or subscribers receive a
  // scheduled post before it is live on the web.
  const posts = (await getPublishedPosts()).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "Kinga Dow Blog",
    description:
      "Retention marketing, Klaviyo strategy, and AI workflows for e-commerce brands.",
    site: context.site ?? "https://kingadow.com",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/blog/${post.id}/`,
      categories: [post.data.category, ...(post.data.keywords ?? [])],
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "Kinga Dow Blog",
    description:
      "Retention marketing, Klaviyo strategy, and AI workflows for e-commerce brands.",
    site: context.site ?? "https://www.kingadow.com",
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

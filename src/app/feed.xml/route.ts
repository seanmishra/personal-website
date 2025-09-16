import { allPosts, type Post } from '../../../.contentlayer/generated';
import { siteConfig } from '@/lib/site-config';

export async function GET() {
  // Filter for published posts only and sort by date descending
  const publishedPosts = allPosts
    .filter((post: Post) => post.published)
    .sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.name}]]></title>
    <description><![CDATA[${siteConfig.description}]]></description>
    <link>${siteConfig.url}</link>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en</language>
    <managingEditor>${siteConfig.author.email} (${siteConfig.author.name})</managingEditor>
    <webMaster>${siteConfig.author.email} (${siteConfig.author.name})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>1800</ttl>
    ${publishedPosts
      .map(
        (post: Post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${siteConfig.url}${post.url}</link>
      <guid isPermaLink="true">${siteConfig.url}${post.url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${siteConfig.author.email} (${siteConfig.author.name})</author>
      <category>${post.category}</category>
      ${post.tags?.map((tag: string) => `<category>${tag}</category>`).join('\n      ') || ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
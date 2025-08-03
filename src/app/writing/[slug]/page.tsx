import { allPosts } from '../../../../.contentlayer/generated';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components/article-layout';
import { Metadata } from 'next';
import { Mdx } from '@/components/mdx-components';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  const socialImageUrl = post.socialImage || post.image;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seanmishra.com';

  return {
    title: `${post.title} - Sean Mishra`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: socialImageUrl ? [{
        url: socialImageUrl.startsWith('http') ? socialImageUrl : `${baseUrl}${socialImageUrl}`,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: socialImageUrl ? [{
        url: socialImageUrl.startsWith('http') ? socialImageUrl : `${baseUrl}${socialImageUrl}`,
        alt: post.title,
      }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seanmishra.com';
  const fullUrl = `${baseUrl}/writing/${slug}`;

  return (
    <ArticleLayout
      title={post.title}
      description={post.description}
      date={post.date}
      author={post.author}
      category={post.category}
      tags={post.tags || []}
      image={post.image}
      url={fullUrl}
      readingTime={post.readingTime}
    >
      <Mdx code={post.body.code} />
    </ArticleLayout>
  );
}

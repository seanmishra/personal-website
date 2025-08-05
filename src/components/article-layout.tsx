import React from 'react';
import { Clock, Calendar, ArrowLeft, BookOpen, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { ShareButtons } from './share-buttons';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleLayoutProps {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  url: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  children: React.ReactNode;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Engineering':
      return <BookOpen className="w-4 h-4" />;
    case 'Product':
      return <TrendingUp className="w-4 h-4" />;
    case 'Leadership':
      return <Users className="w-4 h-4" />;
    case 'Career':
      return <MessageSquare className="w-4 h-4" />;
    default:
      return <BookOpen className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Engineering':
      return 'bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20';
    case 'Product':
      return 'bg-secondary-500/10 text-secondary-600 dark:text-secondary-400 border border-secondary-500/20';
    case 'Leadership':
      return 'bg-success-500/10 text-success-600 dark:text-success-400 border border-success-500/20';
    case 'Career':
      return 'bg-warning-500/10 text-warning-600 dark:text-warning-400 border border-warning-500/20';
    default:
      return 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border border-neutral-500/20';
  }
};

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  description,
  date,
  author,
  category,
  tags,
  image,
  url,
  readingTime,
  children,
}) => {
  const articleUrl = url;
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="px-6 py-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/writing"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-mono text-sm"
          >
            <ArrowLeft size={16} />
            BACK TO WRITING
          </Link>
        </div>
      </nav>

      <article className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Article Header */}
        <header className="pb-16 border-b border-neutral-200 dark:border-neutral-800 mb-16">
          <div className="max-w-4xl">
            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                {getCategoryIcon(category)}
                <span className={`text-xs px-3 py-1 rounded-lg font-mono ${getCategoryColor(category)}`}>
                  {category}
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Cover Image */}
            {image && (
              <div className="relative mb-8 aspect-[1200/630]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="w-full object-cover rounded-lg border border-neutral-200 dark:border-neutral-800"
                  priority
                />
              </div>
            )}
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime.text}</span>
              </div>
              <span>By {author}</span>
            </div>
            
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl">
          <div className="article-content">
            {children}
          </div>

          {/* Bottom Share Buttons */}
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col items-center text-center space-y-6">
              <div>
                <h3 className="font-mono font-semibold text-neutral-900 dark:text-neutral-100 text-sm tracking-wider mb-2">
                  ENJOYED THIS ARTICLE? //
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Share it with your network
                </p>
              </div>
              <ShareButtons
                url={articleUrl}
                title={title}
                description={description}
              />
            </div>
          </div>
        </div>
        
        {/* Bottom spacer */}
        <div className="py-16"></div>
      </article>
    </div>
  );
};

export default ArticleLayout;

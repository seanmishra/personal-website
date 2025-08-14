'use client';
import React, { useState } from 'react';
import { Calendar, Clock, TrendingUp, BookOpen, Users, MessageSquare, Eye } from 'lucide-react';
import { allPosts } from '../../../.contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Writing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sort posts by date and convert Contentlayer data to match original format
  const sortedPosts = allPosts
    .filter(post => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const articles = sortedPosts.map(post => ({
    title: post.title,
    description: post.description,
    excerpt: post.description, // Using description as excerpt for now
    category: post.category,
    date: post.date,
    readTime: post.readingTime.text,
    views: 1200, // Mock view count for now since not in Contentlayer data
    featured: post.featured || false,
    published: post.published,
    link: post.url, // Using internal URL instead of external link
    tags: post.tags || [],
  }));

  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views;
  };

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  const stats = {
    totalArticles: articles.length,
    totalViews: articles.reduce((sum, article) => sum + article.views, 0),
    avgReadTime: Math.round(articles.reduce((sum, article) => sum + parseInt(article.readTime), 0) / articles.length),
  };

  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-2xl font-mono font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                  {`WRITING //`}
                </h1>
                <div className="space-y-4 leading-relaxed">
                  <p className="text-lg">
                    I write about engineering, product development, and the intersection of technology and human behavior. 
                    My goal is to share practical insights from building real products and leading engineering teams.
                  </p>
                  <p>
                    From deep technical tutorials to product strategy thoughts, I try to distill complex topics into 
                    actionable insights that help developers and founders build better products.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-mono font-semibold text-neutral-900 dark:text-neutral-100">
                  STATS //
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {stats.totalArticles}
                    </div>
                    <div className="text-sm">
                      Articles Published
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {(stats.totalViews / 1000).toFixed(0)}k+
                    </div>
                    <div className="text-sm">
                      Total Views
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {stats.avgReadTime}min
                    </div>
                    <div className="text-sm">
                      Avg Read Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* Featured Articles */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                {`FEATURED //`}
              </h2>
              <p className="leading-relaxed">
                My most popular and impactful articles on engineering and product development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 4).map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  className="group p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm flex flex-col h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="space-y-3 flex-grow">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(article.category)}
                            <span className={`text-xs px-2 py-1 rounded-lg font-mono ${getCategoryColor(article.category)}`}>
                              {article.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-sans font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                            {article.title}
                          </h3>
                        </div>
                      </div>

                      <p className="leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="space-y-4 mt-6">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium border border-neutral-200 dark:border-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{formatViews(article.views)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

      {/* All Articles */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {`ALL ARTICLES //`}
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  className="group block p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(article.category)}
                          <span className={`text-xs px-2 py-1 rounded-lg font-mono ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-xl font-sans font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                            {article.title}
                          </h3>
                          <p className="leading-relaxed">
                            {article.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{formatViews(article.views)}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="px-2 py-1 text-neutral-500 dark:text-neutral-400 text-xs">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
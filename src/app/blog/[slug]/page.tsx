import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsData } from '@/data/blogPosts';
import { siteConfig } from '@/config/site';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Sparkles } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found | Brandies Media' };

  return {
    title: `${post.title} | Brandies Media Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default function SingleBlogPostPage({ params }: PageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-slate-500 hover:text-[#0AB6C4] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
        </div>

        {/* Post Header */}
        <div className="space-y-4 mb-8">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-900 border border-cyan-300">
            {post.category}
          </span>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 pt-2 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden relative bg-slate-200">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-slate-900">{post.author.name}</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="relative h-72 sm:h-[420px] w-full rounded-3xl overflow-hidden mb-12 shadow-card-elevated">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
          <div
            className="whitespace-pre-line text-base sm:text-lg"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.*$)/gim, '<h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 mt-8 mb-4">$1</h2>')
                .replace(/^### (.*$)/gim, '<h3 class="font-heading font-bold text-xl text-slate-900 mt-6 mb-3">$1</h3>')
                .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-slate-900">$1</strong>'),
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#0B1220] to-[#10223A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-xl text-white">
              Want us to audit your brand for free?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Get actionable recommendations tailored to your product catalog within 30 minutes.
            </p>
          </div>

          <Link
            href="/ai-audit"
            className="px-6 py-3 rounded-full bg-[#15D8E1] text-slate-950 font-heading font-bold text-xs sm:text-sm hover:bg-[#0AB6C4] transition-colors flex-shrink-0"
          >
            Claim Free Audit →
          </Link>
        </div>
      </div>
    </article>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsData } from '@/data/blogPosts';
import { MandalaArt } from '@/components/common/MandalaArt';
import { Sparkles, Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Blog | E-Commerce Scaling Tactics & Marketplace Insights',
  description:
    'Read actionable playbooks on lowering Amazon ACOS, cutting COD RTO, testing Meta UGC video ads, and building headless Next.js online stores.',
};

export default function BlogPage() {
  const featuredPost = blogPostsData[0];
  const regularPosts = blogPostsData.slice(1);

  return (
    <div className="w-full">
      {/* Blog Hero */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0FDFA] overflow-hidden text-center">
        <MandalaArt position="top-right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0AB6C4]" /> Knowledge Base
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-tight">
            Brandies Growth{' '}
            <span className="text-[#0AB6C4] marker-swoosh">Dispatch</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            No fluff. No recycled generic advice. Deep-dive technical breakdowns of real campaigns, marketplace algorithm updates, and high-converting store engineering.
          </p>
        </div>
      </section>

      {/* Featured Post & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Featured Article Card */}
          {featuredPost && (
            <div className="mb-16 bg-[#FAFCFF] rounded-4xl border border-slate-200 overflow-hidden shadow-card-elevated group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-[#15D8E1] backdrop-blur-md">
                      Featured Playbook
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold">
                    <span className="text-[#0AB6C4]">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {featuredPost.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 group-hover:text-[#0AB6C4] transition-colors leading-snug">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden relative bg-slate-200">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#0AB6C4] hover:text-cyan-700"
                    >
                      <span>Read Playbook</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-[#FAFCFF] rounded-3xl border border-slate-200 overflow-hidden shadow-card-soft hover:shadow-card-elevated hover:border-[#15D8E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-[#15D8E1] backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#0AB6C4] transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">
                    By {post.author.name}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#0AB6C4] group-hover:text-cyan-700"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

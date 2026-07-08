import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { ArrowUpRight } from 'lucide-react';

const description =
  'Notes from Alok Sharma on software engineering, shipping products, and what he learns building them.';

export const metadata: Metadata = {
  title: 'Blog',
  description,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Friend Who Codes',
    description,
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          Writing
        </p>
        <h1 className="rise rise-1 font-display text-4xl md:text-6xl font-medium tracking-tight mb-4">
          Blog
        </h1>
        <p className="rise rise-2 text-muted text-lg max-w-xl mb-14 leading-relaxed">
          Notes on software, shipping products, and what I learn along the way.
        </p>

        {posts.length === 0 ? (
          <div className="rise rise-3 border border-line bg-surface rounded-xl p-10 text-center">
            <p className="font-mono text-sm text-muted">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="rise rise-3 border-t border-line">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid md:grid-cols-[10rem_1fr_auto] gap-2 md:gap-8 items-baseline py-8 border-b border-line transition-colors hover:bg-surface px-1 md:px-4"
              >
                <div className="font-mono text-xs text-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="block mt-1">{post.readingTime}</span>
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted leading-relaxed max-w-xl">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <ArrowUpRight
                  size={18}
                  className="hidden md:block text-muted transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

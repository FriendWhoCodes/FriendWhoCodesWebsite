import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mt-10 mb-4 border-b border-line pb-2">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-6 leading-relaxed text-lg">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-accent">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 marker:text-accent">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-lg leading-relaxed">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className="link-slide text-accent font-medium pb-0.5">
      {children}
    </a>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-surface border border-line px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-ink text-paper p-5 rounded-xl overflow-x-auto mb-6 text-sm dark:bg-surface dark:text-ink dark:border dark:border-line">
      {children}
    </pre>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-2 border-accent pl-6 py-1 my-6 font-display text-xl italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  hr: () => <hr className="my-10 border-line" />,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="rise inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-accent mb-10 transition-colors"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        <header className="mb-12">
          <div className="rise rise-1 font-mono text-xs text-muted mb-5 flex flex-wrap gap-x-4 gap-y-1">
            <span>{post.author}</span>
            <span className="text-accent">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-accent">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="rise rise-2 font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-5 text-balance">
            {post.title}
          </h1>
          {post.description && (
            <p className="rise rise-3 text-xl text-muted leading-relaxed">
              {post.description}
            </p>
          )}
          {post.tags.length > 0 && (
            <div className="rise rise-4 flex flex-wrap gap-x-4 mt-6 pt-6 border-t border-line">
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
        </header>

        <div className="blog-content rise rise-5">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </div>
    </article>
  );
}

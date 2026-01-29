import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-gray-600 dark:text-gray-300 space-y-2">{children}</ol>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300 mb-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}

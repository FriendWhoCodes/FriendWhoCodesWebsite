import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Alok Sharma',
        tags: data.tags || [],
        readingTime: stats.text,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Alok Sharma',
    tags: data.tags || [],
    readingTime: stats.text,
    content,
  };
}

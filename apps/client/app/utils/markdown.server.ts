import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tagName: string;
  description?: string;
  image?: string;
}

export interface Post extends PostMeta {
  content: string;
}

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_PATH, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content: rawContent } = matter(fileContent);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(rawContent);

  return {
    slug,
    title: data.title,
    date: data.date,
    image: data.image,
    tagName: data.tagName,
    description: data.description,
    content: String(processedContent),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_PATH);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      const slug = file.replace(/\.md$/, '');

      return {
        slug,
        title: data.title,
        date: data.date,
        tagName: data.tagName,
        description: data.description,
        image: data.image,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

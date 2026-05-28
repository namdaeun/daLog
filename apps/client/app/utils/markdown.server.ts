import type { Post, PostMeta } from '@diary/shared';

export type { Post, PostMeta };

const API_URL = process.env.API_URL ?? 'http://localhost:8787';

export async function getAllPosts(): Promise<PostMeta[]> {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(`${API_URL}/posts/${encodeURIComponent(slug)}`);
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch post ${slug}: ${res.status}`);
  }
  return res.json();
}

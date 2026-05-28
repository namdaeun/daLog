import type { Post, PostMeta } from '@diary/shared';
import { Router } from 'express';
import { renderMarkdown } from '../markdown.js';
import { prisma } from '../prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: { date: 'desc' },
    select: {
      slug: true,
      title: true,
      date: true,
      tagName: true,
      description: true,
      image: true,
    },
  });

  const result: PostMeta[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date.toISOString(),
    tagName: p.tagName,
    description: p.description ?? undefined,
    image: p.image ?? undefined,
  }));

  res.json(result);
});

router.get('/:slug', async (req, res) => {
  const post = await prisma.post.findUnique({
    where: { slug: req.params.slug },
  });

  if (!post) {
    res.status(404).json({ message: 'Not Found' });
    return;
  }

  const html = await renderMarkdown(post.content);

  const result: Post = {
    slug: post.slug,
    title: post.title,
    date: post.date.toISOString(),
    tagName: post.tagName,
    description: post.description ?? undefined,
    image: post.image ?? undefined,
    content: html,
  };

  res.json(result);
});

export default router;

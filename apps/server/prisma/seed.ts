import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PrismaClient } from '@prisma/client';
import matter from 'gray-matter';

const prisma = new PrismaClient();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// apps/server/prisma -> apps/client/content/blog
const BLOG_DIR = path.resolve(__dirname, '../../client/content/blog');

async function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(`[seed] blog dir not found: ${BLOG_DIR}`);
    return;
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data, content } = matter(raw);

    const date = new Date(data.date);
    if (Number.isNaN(date.getTime())) {
      console.warn(`[seed] skip ${slug}: invalid date "${data.date}"`);
      continue;
    }

    await prisma.post.upsert({
      where: { slug },
      create: {
        slug,
        title: data.title,
        date,
        tagName: data.tagName,
        description: data.description ?? null,
        image: data.image ?? null,
        content,
      },
      update: {
        title: data.title,
        date,
        tagName: data.tagName,
        description: data.description ?? null,
        image: data.image ?? null,
        content,
      },
    });

    console.log(`[seed] upserted ${slug}`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

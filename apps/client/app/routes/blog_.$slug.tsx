import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import MarkdownContent from '~/components/MarkdownContent/MarkdownContent';
import Tag from '~/components/Tag/Tag';
import { formatDate } from '~/utils/format';
import { getPostBySlug } from '~/utils/markdown.server';
import * as styles from './blog_.$slug.css';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;

  if (!slug) {
    throw new Response('Not Found', { status: 404 });
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }

  return json({ post });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: 'Post Not Found' }];
  }

  return [
    { title: data.post.title },
    { name: 'description', content: data.post.description || '' },
  ];
};

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        {post.image && (
          <img src={post.image} alt={post.title} className={styles.thumbnail} />
        )}
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          {post.tagName.split(',').map((tagName) => (
            <Tag size="sm" key={tagName}>
              {tagName.trim()}
            </Tag>
          ))}
          <span className={styles.date}>{formatDate(post.date)}</span>
        </div>
      </header>
      <MarkdownContent content={post.content} />
    </article>
  );
}

import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import ArticleCard from '~/components/ArticleCard/ArticleCard';
import { getPosts } from '~/utils/markdown.server';
import * as S from './blog.css';

export const loader = async () => {
  const posts = await getPosts();
  return json({ posts });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className={S.wrapper}>
      <ul className={S.articleList}>
        {posts.map((post) => (
          <li key={post.slug} className={S.articleItem}>
            <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <ArticleCard
                title={post.title}
                image={post.image ?? '/assets/image/blog/default_thumbnail.png'}
                tagName={post.tagName}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

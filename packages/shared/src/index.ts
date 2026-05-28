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

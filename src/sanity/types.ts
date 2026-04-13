import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImageSource } from '@sanity/image-url';

export type BlogPostListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string | null;
  mainImage: SanityImageSource | null;
};

export type BlogPostDetail = BlogPostListItem & {
  body: PortableTextBlock[];
};

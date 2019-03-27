import { Tracing } from 'trace_events';

export interface BlogPost {
  excerpt: string;
  fields: {
    path: string;
    slug: string;
  };
  frontmatter: {
    cover?: string;
    date: string;
    title: string;
  };
  html: string;
  id: string;
  timeToRead: number;
}

export interface BookReview {
  author: string;
  authorTitle: string;
  text: string;
}

export interface Book {
  coverImage: any;
  excerpt?: string;
  frontmatter: {
    cover?: string;
    date: string;
    isbn10?: string;
    isbn13?: string;
    productId?: {
      amazon?: string;
      indiebound?: string;
    };
    reviews: BookReview[];
    subtitle?: string;
    title: string;
  };
  html: string;
  id: string;
  path: string;
  slug: string;
}

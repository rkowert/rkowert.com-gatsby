import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface BlogPost {
  excerpt: string;
  fields: {
    path: string;
    slug: string;
  };
  frontmatter: {
    cover?: string;
    date: string;
    tags?: string[];
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  excerpt?: string;
  frontmatter: {
    cover?: {
      childImageSharp: { gatsbyImageData: IGatsbyImageData };
      extension: string;
      publicURL: string;
    };
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

export type GamesResearchRow<T> = { [K in keyof T]: T[K] };

export interface GamesResearchJournalRow {
  title: string;
  url: string;
  discipline: string;
  publisher: string;
  publisherUrl: string;
  frequency: string;
  issn: string;
  eissn: string;
  h5Index: string;
  h5Median: string;
  impactFactor: string;
  wordLimit: string;
  briefWordLimit: string;
  journalReviewerUrl: string;
  submissionGuidelinesUrl: string;
}

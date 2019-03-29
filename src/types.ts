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

export namespace CV {
  export interface Book {
    authors: string;
    date: string;
    publisher: Publisher;
    title: string;
    url?: string;
  }

  export interface BookChapter {
    authors: string;
    book: Partial<Book>;
    date: string;
    pages?: string;
    title: string;
  }

  export interface Conference {
    date?: string;
    location: string;
    title: string;
  }

  export interface ConferenceProceeding {
    authors: string;
    conference: Conference;
    date: string;
    title: string;
    url?: string;
  }

  export interface EditedVolume extends Book {}

  export interface Education {
    degree: string;
    source: string;
    url?: string;
    year: string;
  }

  export interface JournalArticle {
    authors: string;
    date: string;
    publication: Publication;
    title: string;
    url?: string;
  }

  export interface ProfessionalAppointment {
    date: string;
    title: string;
  }

  interface Publication {
    doi?: string;
    edition?: string;
    pages?: string;
    title: string;
    url?: string;
  }

  interface Publisher {
    location: string;
    title: string;
  }
}

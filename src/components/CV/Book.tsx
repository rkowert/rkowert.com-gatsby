import React from 'react';

import type { Book as BookType } from 'types/cv';

interface Props {
  book: BookType;
}

export default function Book({ book }: Props) {
  const authors = book.authors.replace(/\.$/, '');
  const title = book.url ? <a href={book.url}>{book.title}</a> : book.title;
  const publisherMarkup = `${book.publisher.location}: ${book.publisher.title}`;

  return (
    <span>
      {authors}. ({book.date}). {title}. {publisherMarkup}.
    </span>
  );
}

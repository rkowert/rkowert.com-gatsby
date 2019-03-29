import React from 'react';

import { CV } from 'types';

interface Props {
  book: CV.Book;
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

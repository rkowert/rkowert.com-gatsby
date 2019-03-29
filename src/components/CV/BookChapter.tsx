import React from 'react';

import { CV } from 'types';

interface Props {
  chapter: CV.BookChapter;
}

export default function BookChapter({ chapter }: Props) {
  const authors = chapter.authors.replace(/\.$/, '');
  const book = chapter.book;
  const publisherMarkup = book.publisher
    ? `${book.publisher.location}: ${book.publisher.title}.`
    : '';
  const pages = chapter.pages ? `(p. ${chapter.pages}).` : '';

  return (
    <span>
      {authors}. ({chapter.date}).
      {chapter.title}. In {book.authors} <i>{book.title}</i>.{pages}
      {publisherMarkup}
    </span>
  );
}

import React from 'react';

import type { BookChapter as BookChapterType } from 'types/cv';

interface Props {
  chapter: BookChapterType;
}

function getPublisherMarkup(book: BookChapterType['book']) {
  if (book.publisher) {
    if (book.publisher.location) {
      return `${book.publisher.location}: ${book.publisher.title}.`;
    }

    return `${book.publisher.title}.`;
  }

  return '';
}

export default function BookChapter({ chapter }: Props) {
  const authors = chapter.authors.replace(/\.$/, '');
  const { book } = chapter;
  const publisherMarkup = getPublisherMarkup(book);
  const pages = chapter.pages ? ` (p. ${chapter.pages}).` : '';

  return (
    <span>
      {authors}. ({chapter.date}). {chapter.title}. In {book.authors}{' '}
      <i>{book.title}</i>.{pages} {publisherMarkup}
    </span>
  );
}

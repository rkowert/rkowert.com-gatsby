import * as React from 'react';

import { BookReview as BookReviewType } from 'types';

interface Props {
  review: BookReviewType;
}

export default function BookReview({ review }: Props) {
  return (
    <blockquote className="book-review">
      <p className="book-review__text">{review.text}</p>
      <footer>
        <cite className="book-review__author">
          {review.author}, {review.authorTitle}
        </cite>
      </footer>
    </blockquote>
  );
}

import * as React from 'react';

import { BookReview as BookReviewType } from 'types';

interface Props {
  review: BookReviewType;
}

export default function BookReview({ review }: Props) {
  return (
    <blockquote>
      <p>“{review.text}”</p>
      <footer>
        <cite>
          {review.author}, {review.authorTitle}
        </cite>
      </footer>
    </blockquote>
  );
}

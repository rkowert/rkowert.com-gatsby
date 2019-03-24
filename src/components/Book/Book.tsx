import * as React from 'react';

import { AmazonBuyButton, BookReview, IndieboundBuyButton } from 'components';
import { Book as BookType } from 'types';
import * as styles from './Book.module.css';

interface Props {
  book: BookType;
}

export default function Book({ book }: Props) {
  const { cover, productId, reviews, subtitle, title } = book.frontmatter;
  const coverImage = cover ? cover : null;

  return (
    <div className={styles.Book}>
      {coverImage}
      <h2 className={styles.Title}>{title}</h2>
      {subtitle && <h3 className={styles.Subtitle}>{subtitle}</h3>}
      <div
        dangerouslySetInnerHTML={{
          __html: book.html,
        }}
      />
      {reviews.length > 0 &&
        reviews.map(review => (
          <BookReview review={review} key={review.author} />
        ))}
      <p className={styles.BuyButtons}>
        {productId && productId.indiebound && (
          <IndieboundBuyButton productId={productId.indiebound} />
        )}
        {productId && productId.amazon && (
          <AmazonBuyButton productId={productId.amazon} />
        )}
      </p>
    </div>
  );
}

import * as React from 'react';
import Img from 'gatsby-image';

import { AmazonBuyButton, BookReview, IndieboundBuyButton } from 'components';
import { Book as BookType } from 'types';
import * as styles from './Book.module.css';

interface Props {
  book: BookType;
}

export default function Book({ book }: Props) {
  const {
    coverImage,
    frontmatter: { productId, reviews, subtitle, title },
  } = book;

  return (
    <div className={styles.Book}>
      <h2 className={styles.Title}>{title}</h2>
      <div>
        {subtitle && <h3 className={styles.Subtitle}>{subtitle}</h3>}
        {reviews.length > 0 &&
          reviews.map(review => (
            <BookReview review={review} key={review.author} />
          ))}
        <div
          dangerouslySetInnerHTML={{
            __html: book.html,
          }}
        />
      </div>
      <div>
        {coverImage && (
          <Img
            className={styles.BookCover}
            fluid={coverImage.fluid}
            alt={`Cover of book, ${title}`}
          />
        )}
        <p className={styles.BuyButtons}>
          {productId && productId.indiebound && (
            <IndieboundBuyButton productId={productId.indiebound} />
          )}
          {productId && productId.amazon && (
            <AmazonBuyButton productId={productId.amazon} />
          )}
        </p>
      </div>
    </div>
  );
}

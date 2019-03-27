import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { FaLongArrowAltRight } from 'react-icons/fa/index.mjs';

import { AmazonBuyButton, BookReview, IndieboundBuyButton } from 'components';
import { Book as BookType } from 'types';
import * as styles from './BookExcerpt.module.css';

interface Props {
  book: BookType;
}

export default function BookExcerpt({ book }: Props) {
  const {
    coverImage,
    frontmatter: { date, subtitle, title },
    path,
    slug,
  } = book;

  const publishDate = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

  return (
    <div className={styles.BookExcerpt}>
      <div>
        <Link to={path}>
          {coverImage && (
            <Img
              className={styles.BookCover}
              fluid={coverImage.fluid}
              alt={`Cover of book, ${title}`}
            />
          )}
        </Link>
        <p className={styles.Date}>Published {publishDate}</p>
      </div>
      <div>
        <Link to={path}>
          <h3 className={styles.Title}>{title}</h3>
        </Link>
        {subtitle && <h4 className={styles.Subtitle}>{subtitle}</h4>}
        <div
          dangerouslySetInnerHTML={{
            __html: book.excerpt,
          }}
        />
        <p>
          <Link to={path} className={styles.ContinueReadingLink}>
            Continue reading <FaLongArrowAltRight atia-hidden="true" />
          </Link>
        </p>
      </div>
    </div>
  );
}

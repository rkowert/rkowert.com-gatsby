import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { AmazonBuyButton, BookReview, IndieboundBuyButton } from 'components';
import { Book as BookType } from 'types';
import { rhythm } from 'utils/typography';

interface Props {
  book: BookType;
}

const Book = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(7.5rem, 15rem);
  grid-gap: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};

  & h2 {
    grid-column: 1 / span 2;
    margin-bottom: 0;
  }
`;

const BookCover = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`;

const BuyButtons = styled.p`
  display: flex;
  flex-flow: row wrap;
  margin: ${rhythm(1)} 0 0;

  & a {
    margin-right: ${rhythm(1 / 2)};

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Title = styled.h2`
  font-weight: 800;
`;

const Subtitle = styled.h3`
  color: ${props => props.theme.color.text.subdued};
  font-family: 'Muli', sans-serif;
  font-style: italic;
  font-weight: 300;
`;

export default function({ book }: Props) {
  const {
    coverImage,
    frontmatter: { productId, reviews, subtitle, title },
  } = book;

  return (
    <Book>
      <Title>{title}</Title>
      <div>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
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
          <BookCover>
            <Img fluid={coverImage.fluid} alt={`Cover of book, ${title}`} />
          </BookCover>
        )}
        <BuyButtons>
          {productId && productId.indiebound && (
            <IndieboundBuyButton productId={productId.indiebound} />
          )}
          {productId && productId.amazon && (
            <AmazonBuyButton productId={productId.amazon} />
          )}
        </BuyButtons>
      </div>
    </Book>
  );
}

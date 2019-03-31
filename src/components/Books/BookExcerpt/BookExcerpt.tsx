import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa/index.mjs';

import { AmazonBuyButton, BookReview, IndieboundBuyButton } from 'components';
import { Book as BookType } from 'types';
import { rhythm } from 'utils/typography';

interface Props {
  book: BookType;
}

const BookExcerpt = styled.div`
  display: grid;
  grid-template-columns: minmax(7.5rem, 15rem) minmax(13rem, 1fr);
  grid-gap: ${rhythm(1)};

  /* margin-bottom: 1.53rem; */
  border-bottom: 2px solid ${props => props.theme.color.separator};

  & h2 {
    grid-column: 1 / span 2;
    margin-bottom: 0;
  }

  @media (min-width: 68em) {
  }
`;

const BookCover = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`;

const PublishedDate = styled.p`
  color: ${props => props.theme.color.text.subdued};
`;

const Title = styled.h3`
  font-weight: 800;
`;

const Subtitle = styled.h4`
  color: ${props => props.theme.color.text.subdued};
  font-family: 'Muli', sans-serif;
  font-style: italic;
  font-weight: 300;
`;

const ContinueReadingLink = styled(Link)`
  font-family: 'Muli', sans-serif;
  font-weight: bold;

  & svg {
    vertical-align: middle;
  }
`;

export default function({ book }: Props) {
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
    <BookExcerpt>
      <div>
        <Link to={path}>
          {coverImage && (
            <BookCover>
              <Img fluid={coverImage.fluid} alt={`Cover of book, ${title}`} />
            </BookCover>
          )}
        </Link>
        <PublishedDate>Published {publishDate}</PublishedDate>
      </div>
      <div>
        <Link to={path}>
          <Title>{title}</Title>
        </Link>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <div
          dangerouslySetInnerHTML={{
            __html: book.excerpt,
          }}
        />
        <p>
          <ContinueReadingLink to={path}>
            Continue reading <FaLongArrowAltRight atia-hidden="true" />
          </ContinueReadingLink>
        </p>
      </div>
    </BookExcerpt>
  );
}

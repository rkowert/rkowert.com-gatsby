import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { Book as BookType } from 'types';
import { rhythm } from 'utils/typography';
import { BookCoverImage } from '../BookCoverImage/BookCoverImage';

interface Props {
  book: Partial<BookType>;
}

const Container = styled.div`
  /* margin-bottom: 1.53rem; */
  border-bottom: 2px solid ${(props) => props.theme.color.separator};

  & h2 {
    grid-column: 1 / span 2;
    margin-bottom: 0;
  }

  @media (min-width: 25em) {
    display: grid;
    grid-template-columns: minmax(7.5rem, 15rem) minmax(13rem, 1fr);
    grid-gap: ${rhythm(1)};
  }
`;

const BookCoverWrapper = styled.div`
  float: left;
  width: 7.5rem;
  margin: 0 ${rhythm(1 / 2)} 0 0;

  @media (min-width: 25em) {
    float: none;
    width: auto;
    margin: 0;
  }
`;

const BookCover = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`;

const PublishedDate = styled.p`
  color: ${(props) => props.theme.color.text.subdued};
  margin-bottom: ${rhythm(1 / 4)};

  @media (min-width: 25em) {
    margin-bottom: ${rhythm(1)};
  }
`;

const Title = styled.h3`
  font-weight: 800;
`;

const Subtitle = styled.h4`
  color: ${(props) => props.theme.color.text.subdued};
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

export default function BookExcerpt({ book }: Props) {
  const {
    frontmatter: { cover, date, subtitle, title },
    path,
  } = book;

  const publishDate = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

  return (
    <Container>
      <BookCoverWrapper>
        <Link to={path}>
          {cover && (
            <BookCover>
              <BookCoverImage image={cover} alt={`Cover of book, ${title}`} />
            </BookCover>
          )}
        </Link>
        <PublishedDate>Published {publishDate}</PublishedDate>
      </BookCoverWrapper>
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
    </Container>
  );
}

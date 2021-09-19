import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import styled from 'styled-components';
import { rhythm } from 'utils/typography';

import {
  About,
  BookExcerpt,
  Layout,
  Profile,
  SEO,
  YoutubeVideo,
  Welcome,
} from 'components';
import { HomePageQuery } from 'types/graphql';

type Props = PageProps<HomePageQuery>;

/* 3.06rem + 16rem + 3.06rem + 30rem + 3.06rem = 57.18rem */
const HelloSection = styled.section`
  margin: 0 auto;
  max-width: 70rem;

  @media (min-width: 48em) {
    display: grid;
    grid-gap: ${rhythm(2)};
    grid-template-columns: 16rem minmax(min-content, 50rem);
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      'Profile Welcome'
      'Main Main';
  }

  @media (min-width: 60em) {
    grid-row-gap: 0;
    grid-template-areas:
      'Profile Welcome'
      'Profile Main';
  }
`;

const StyledProfile = styled(Profile)`
  grid-area: Profile;
`;

const StyledWelcome = styled(Welcome)`
  grid-area: Welcome;
`;

const Main = styled.div`
  grid-area: Main;
  margin-bottom: ${rhythm(2)};
`;

const AboutSection = styled.section`
  padding: ${rhythm(2)} 0;
  position: relative;

  &::before {
    background: ${(props) => props.theme.stripedSections.backgroundColor};
    content: '';
    position: absolute;
    width: 200vw;
    height: 100%;
    left: -100vw;
    top: 0;
    z-index: -1;
  }

  &::after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
  }
`;

const BooksSection = styled.section`
  padding: ${rhythm(2)} 0;
  margin: 0 auto;
  max-width: 60rem;
`;

const BooksGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.06rem;
  margin-bottom: ${rhythm(2)};

  & > div {
    grid-column: 1 / span 2;

    @media (min-width: 48em) {
      grid-column: auto;
    }
  }
`;

const BookSpotlight = styled.div`
  margin-bottom: ${rhythm(2)};
`;

export default function Home({
  data: {
    booksQuery: { edges: books },
  },
}: Props): React.ReactElement {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={['rachel', 'kowert', 'psychology', 'gaming', 'psychgeist']}
      />
      <main>
        <HelloSection>
          <StyledProfile />
          <StyledWelcome />
          <Main>
            <p>
              For more on the psychology of games, please visit her YouTube
              channel: <a href="https://youtube.com/c/Psychgeist">Psychgeist</a>
              .
            </p>
            <YoutubeVideo videoId="LpCuWV_BD38" />
          </Main>
        </HelloSection>
        <AboutSection>
          <About />
        </AboutSection>
        <BooksSection>
          <h2>Books</h2>
          <BookSpotlight>
            <YoutubeVideo videoId="-GRfL_jlyjw" />
            <br />
            <p>
              For more on the science behind the development of the stories
              within <em>Pragmatic Princess</em>, see{' '}
              <a href="https://buildyourowncastle.com">
                BuildYourOwnCastle.com
              </a>
              .
            </p>
          </BookSpotlight>

          <h3>Latest books</h3>
          <BooksGrid>
            {books.map(({ node }) => {
              const book = {
                ...node,
                path: node.fields.path,
                slug: node.fields.slug,
              };

              return <BookExcerpt book={book} key={book.id} />;
            })}
          </BooksGrid>
          <p>
            For the full catalog, please visit the{' '}
            <Link to="/books">Books</Link> page.
          </p>
        </BooksSection>
        <section className="Media" />
        <section className="Contact" />
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query HomePage {
    booksQuery: allMarkdownRemark(
      filter: { fields: { collection: { eq: "books" } } }
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(format: HTML, pruneLength: 250)
          id
          fields {
            path
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 300
                )
              }
              extension
              publicURL
            }
            date(formatString: "MMMM DD, YYYY")
            subtitle
            title
          }
        }
      }
    }
    # postsQuery: allMarkdownRemark(
    #   filter: { fields: { collection: { eq: "blog-posts" } } }
    #   limit: 3
    #   sort: { order: DESC, fields: [frontmatter___date] }
    # ) {
    #   edges {
    #     node {
    #       id
    #       excerpt(format: HTML, pruneLength: 350)
    #       fields {
    #         path
    #         slug
    #       }
    #       frontmatter {
    #         date(formatString: "MMMM DD, YYYY")
    #         title
    #       }
    #       timeToRead
    #     }
    #   }
    # }
  }
`;

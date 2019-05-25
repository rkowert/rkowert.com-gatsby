import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styled from 'styled-components';
import { rhythm } from 'utils/typography';

import {
  About,
  BookExcerpt,
  KeepCalmAndGameOn,
  Layout,
  RecentBlogPosts,
  SEO,
  SocialMediaIcons,
  Welcome,
} from 'components';

/* 3.06rem + 16rem + 3.06rem + 30rem + 3.06rem = 57.18rem */
const HelloSection = styled.section`
  margin: 0 auto;
  max-width: 70rem;

  @media (min-width: 57.18em) {
    display: grid;
    grid-column-gap: ${rhythm(2)};
    grid-template-areas: 'left main';
    grid-template-columns: 16rem minmax(30rem, 50rem);
  }
`;

const SocialMediaIconsContainer = styled.div`
  display: none;

  @media (min-width: 60em) {
    display: block;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-width: 50rem;
  padding: ${rhythm(2)} 0;
  position: relative;

  &::before {
    background: ${props => props.theme.stripedSections.backgroundColor};
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

  & > div {
    margin: ${rhythm(1)} auto 0;
    max-width: 15rem;
    order: 99;
  }

  @media (min-width: 48rem) {
    display: block;

    & > div {
      float: right;
      margin: 0 0 ${rhythm(2)} ${rhythm(2)};
    }
  }
`;

const BooksSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.06rem;
  padding: ${rhythm(2)} 0;
  margin: 0 auto;
  max-width: 60rem;

  & h2 {
    grid-column: 1 / span 2;
    margin-bottom: 0;
  }

  & > div {
    grid-column: 1 / span 2;

    @media (min-width: 48em) {
      grid-column: auto;
    }
  }
`;

export default function Home({
  data: {
    allImageSharp: { edges: images },
    booksQuery: { edges: books },
    postsQuery: { edges: posts },
  },
}) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={['rachel', 'kowert', 'psychology', 'gaming']}
      />
      <main>
        <HelloSection>
          <div>
            <Welcome />
            <SocialMediaIconsContainer>
              <SocialMediaIcons />
            </SocialMediaIconsContainer>
            {/* <LatestTweet /> */}
            {/* <LatestInstagram /> */}
          </div>
          <div>
            <h2>Recent Blog Posts</h2>
            <RecentBlogPosts posts={posts} />
            <p>
              <Link to="/blog">
                See more posts <FaLongArrowAltRight atia-hidden="true" />
              </Link>
            </p>
          </div>
        </HelloSection>
        <AboutSection>
          <h2 id="about">About Me</h2>
          <KeepCalmAndGameOn />
          <p>
            I am currently the Research Director for{' '}
            <a href="http://www.takethis.org/">Take This</a>, a non-profit
            organization that provides mental health information and resources
            to the gaming community and industry. I am also the Chief Scientific
            Officer of{' '}
            <a href="https://www.kitsuneanalytics.com/">Kitsune Analytics</a>.
          </p>
          <h3>Current Projects</h3>
          <ul>
            <li>
              Examining the links between unintentional learning, knowledge
              transfer, and psychological well-being within digital games
            </li>
            <li>
              Assessing Internet Gaming Disorder as a primary or secondary
              diagnosis
            </li>
            <li>
              Identifying initiates to better understand and mitigate dark
              participation within gaming cultures
            </li>
            <li>Reconceptualizing “video game involvement”</li>
            <li>
              Evaluating the potential for video game play to mitigate symptoms
              of PTSD among veterans
            </li>
          </ul>
          {/* <About /> */}
        </AboutSection>
        <BooksSection>
          <h2>Books</h2>
          {books.map(({ node }) => {
            const img = images.find(
              ({ node: { fluid: image } }) =>
                image.originalName === node.frontmatter.cover
            );
            const book = {
              ...node,
              coverImage: img ? img.node : null,
              path: node.fields.path,
              slug: node.fields.slug,
            };

            return <BookExcerpt book={book} key={book.id} />;
          })}
        </BooksSection>
        <section className="Media" />
        <section className="Contact" />
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allImageSharp(filter: { fields: { collection: { eq: "images" } } }) {
      edges {
        node {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            originalName
          }
        }
      }
    }
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
            cover
            date(formatString: "MMMM DD, YYYY")
            subtitle
            title
          }
        }
      }
    }
    postsQuery: allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog-posts" } } }
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 350)
          fields {
            path
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`;

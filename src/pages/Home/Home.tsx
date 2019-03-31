import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaLongArrowAltRight } from 'react-icons/fa/index.mjs';
import styled from 'styled-components';
import { rhythm } from 'utils/typography';

import {
  BookExcerpt,
  KeepCalmAndGameOn,
  Layout,
  RecentBlogPosts,
  SEO,
  SocialMediaIcons,
  Welcome,
} from 'components';

/* 16rem + 4rem + 30rem + 4rem + 7.5rem = 61.5rem */
const Hello = styled.section`
  display: grid;
  grid-template-areas: 'left right';
  grid-template-columns: 16rem minmax(30rem, 1fr) minmax(6rem, 15rem);
  grid-column-gap: ${rhythm(2)};

  & > div {
    grid-column: 1 / span 2;

    @media (min-width: 48em) {
      &:nth-child(2) {
        grid-column: 2;
      }

      &:nth-child(3) {
        grid-column: 1;
        grid-row: 2;
      }
    }

    @media (min-width: 60em) {
      &,
      &:nth-child(2),
      &:nth-child(3) {
        grid-column: auto;
        grid-row: auto;
      }
    }
  }
`;

const SocialMediaIconsContainer = styled.div`
  display: none;

  @media (min-width: 60em) {
    display: block;
  }
`;

const About = styled.section`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 200vw;
    height: 100%;
    left: -100vw;
    background: #ddd;
    z-index: -1;
  }
`;

const Books = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.06rem;

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
        <Hello>
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
          <div>
            <KeepCalmAndGameOn />
          </div>
        </Hello>
        <About>
          <p>ABOUT GOES HERE</p>
        </About>
        <Books>
          <h2>Books</h2>
          {books.map(({ node }) => {
            const img = images.find(
              ({ node: { fluid: image } }) =>
                image.originalName === node.frontmatter.cover
            );
            const book = {
              ...node,
              coverImage: img ? img['node'] : null,
              path: node.fields.path,
              slug: node.fields.slug,
            };

            return <BookExcerpt book={book} key={book.id} />;
          })}
        </Books>
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

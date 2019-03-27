import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaLongArrowAltRight } from 'react-icons/fa/index.mjs';

import {
  BookExcerpt,
  KeepCalmAndGameOn,
  Layout,
  RecentBlogPosts,
  SEO,
  SocialMediaIcons,
  Welcome,
} from 'components';

import * as styles from './Home.module.css';

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
      <main className={styles.Home}>
        <section className={styles.Hello}>
          <div>
            <Welcome />
            <div className={styles.SocialMediaIcons}>
              <SocialMediaIcons />
            </div>
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
        </section>
        <section className={styles.About}>
          <p>ABOUT GOES HERE</p>
        </section>
        <section className={styles.Books}>
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
        </section>
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

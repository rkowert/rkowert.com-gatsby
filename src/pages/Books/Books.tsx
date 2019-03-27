import * as React from 'react';
import { graphql } from 'gatsby';

import { Book, Layout, SEO } from 'components';

import * as styles from './Books.module.css';

export default function Books({
  data: {
    allMarkdownRemark: { edges: books },
    allImageSharp: { edges: images },
  },
}) {
  return (
    <Layout>
      <SEO
        title="Books"
        keywords={['rachel', 'kowert', 'psychology', 'gaming']}
      />
      <main>
        <h1>Books</h1>
        {books.map(({ node }) => {
          const img = images.find(
            ({ node: { fluid: image } }) =>
              image.originalName === node.frontmatter.cover
          );
          const book = {
            ...node,
            coverImage: img ? img['node'] : null,
          };

          return <Book book={book} key={book.id} id={book.fields.slug} />;
        })}
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "books" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          html
          fields {
            path
            slug
          }
          frontmatter {
            cover
            date(formatString: "MMMM DD, YYYY")
            # isbn10
            # isbn13
            productId {
              amazon
              indiebound
            }
            reviews {
              author
              authorTitle
              text
            }
            subtitle
            title
          }
        }
      }
    }
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
  }
`;

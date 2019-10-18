import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Book, Layout, SEO } from 'components';

const Main = styled.main`
  margin: 0 auto;
  max-width: 65rem; /* 50rem + 15rem */
`;

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
      <Main>
        <h1>Books</h1>
        {books.map(({ node }) => {
          const img = images.find(
            ({ node: { fluid: image } }) =>
              image.originalName === node.frontmatter.cover
          );
          // const mdReviews = book.reviews.map((_, index) => book.fields.frontmattermd.reviews[index]);
          const book = {
            ...node,
            coverImage: img ? img.node : null,
          };

          return <Book book={book} key={book.id} />;
        })}
      </Main>
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
            # frontmattermd {
            #   reviews {
            #     authorTitle {
            #       html
            #     }
            #   }
            # }
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

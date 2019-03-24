import * as React from 'react';
import { graphql, Link } from 'gatsby';

import { Book, Layout, SEO } from 'components';

import * as styles from './Books.module.css';

export default function Books({
  data: {
    allMarkdownRemark: { edges: books },
  },
}) {
  console.log(books);
  return (
    <Layout>
      <SEO
        title="Books"
        keywords={['rachel', 'kowert', 'psychology', 'gaming']}
      />
      <main>
        <h1>Books</h1>
        {books.map(({ node: book }) => (
          <Book book={book} key={book.id} />
        ))}
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
            slug
          }
          frontmatter {
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
  }
`;

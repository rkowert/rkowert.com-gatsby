import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';

import { Book, Layout, SEO } from 'components';
import { BooksPageQuery } from 'types/graphql';

const Main = styled.main`
  margin: 0 auto;
  max-width: 65rem; /* 50rem + 15rem */
`;

type Props = PageProps<BooksPageQuery>;

export default function Books({
  data: {
    allMarkdownRemark: { edges: books },
  },
}: Props): React.ReactElement {
  return (
    <Layout>
      <SEO
        title="Books"
        keywords={['rachel', 'kowert', 'psychology', 'gaming']}
      />
      <Main>
        <h1>Books</h1>
        {books.map(({ node }) => {
          const book = {
            ...node,
            path: node.fields.path,
            slug: node.fields.slug,
          };

          return <Book book={book} key={book.id} />;
        })}
      </Main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BooksPage {
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

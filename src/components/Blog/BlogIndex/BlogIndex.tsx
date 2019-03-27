import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa/index.mjs';

import { Layout, BlogPostExcerpt, SEO } from 'components';
import {
  formatPostDate,
  formatReadingTime,
  getBlogIndexPagePath,
} from 'utils/helpers';
import { BlogPost } from 'types';
import * as styles from './BlogIndex.module.css';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: BlogPost;
      }[];
    };
  };
  pageContext: {
    currentPage: number;
    limit: number;
    numPages: number;
    skip: number;
    // previousPagePath: string;
    // nextPagePath: string;
  };
}

export default function BlogIndex({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}: Props) {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = getBlogIndexPagePath(currentPage - 1);
  const nextPage = getBlogIndexPagePath(currentPage + 1);
  const posts = edges.map(edge => (
    <BlogPostExcerpt key={edge.node.id} post={edge.node} />
  ));
  const title = `Blog${isFirst ? '' : ` - Page ${currentPage}`}`;

  return (
    <Layout>
      <SEO title={title} />
      <main>
        {posts}
        <nav className={styles.BlogPagination} aria-label="Blog pagination">
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              <FaArrowLeft aria-hidden="true" /> Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page <FaArrowRight aria-hidden="true" />
            </Link>
          )}
        </nav>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog-posts" } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 250)
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

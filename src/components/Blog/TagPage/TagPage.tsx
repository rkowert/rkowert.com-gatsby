import React from 'react';
import { graphql } from 'gatsby';

import { BlogPage, BlogPostExcerpt, Layout, SEO } from 'components';
import { BlogPost } from 'types';

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
    tag: string;
  };
}

export default function({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}: Props) {
  const { tag } = pageContext;
  const posts = edges.map(edge => (
    <BlogPostExcerpt key={edge.node.id} post={edge.node} />
  ));
  return (
    <Layout>
      <SEO title={`Posts tagged with "${tag}" | Blog`} />
      <BlogPage>
        <main>
          <h1>Posts tagged with “{tag}”</h1>
          {posts}
        </main>
      </BlogPage>
    </Layout>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: {
        fields: { collection: { eq: "blog-posts" }, tags: { in: [$tag] } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 250)
          fields {
            path
            slug
            tags
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

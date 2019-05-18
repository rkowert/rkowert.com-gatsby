import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

import { Layout, SEO } from 'components';

const Main = styled.main`
  margin: 0 auto;
  max-width: 50rem;
`;

export default function() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(filter: { fields: { slug: { eq: "about" } } }) {
            edges {
              node {
                code {
                  body
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <SEO
            title="About Me"
            keywords={['rachel', 'kowert', 'psychology', 'gaming']}
          />
          <Main>
            <h1>About Me</h1>
            <MDXRenderer>{data.allMdx.edges[0].node.code.body}</MDXRenderer>
          </Main>
        </Layout>
      )}
    />
  );
}

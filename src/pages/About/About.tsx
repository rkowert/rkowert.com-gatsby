import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
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
          allMarkdownRemark(filter: { fields: { slug: { eq: "about" } } }) {
            edges {
              node {
                html
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
            <div
              dangerouslySetInnerHTML={{
                __html: data.allMarkdownRemark.edges[0].node.html,
              }}
            />
          </Main>
        </Layout>
      )}
    />
  );
}

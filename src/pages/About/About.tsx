import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

import { Layout, SEO } from 'components';
import { rhythm } from 'utils/typography';

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-width: 50rem;

  & > div {
    margin: ${rhythm(1)} auto 0;
    max-width: 15rem;
    order: 99;
  }

  @media (min-width: 48rem) {
    display: block;

    & > div {
      float: right;
      margin: 0 0 ${rhythm(2)} ${rhythm(2)};
    }
  }
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

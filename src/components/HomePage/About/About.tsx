import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import { rhythm } from 'utils/typography';

const About = styled.div`
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
                body
              }
            }
          }
        }
      `}
      render={data => (
        <About>
          <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
        </About>
      )}
    />
  );
}

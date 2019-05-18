import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

const About = styled.div``;

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
        <About>
          <MDXRenderer>{data.allMdx.edges[0].node.code.body}</MDXRenderer>
        </About>
      )}
    />
  );
}

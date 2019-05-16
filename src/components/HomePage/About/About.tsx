import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import { rhythm } from 'utils/typography';

const About = styled.div``;

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
        <About>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </About>
      )}
    />
  );
}

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { rhythm } from 'utils/typography';

const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0;

  @media (min-width: 60em) {
    margin-bottom: ${rhythm(1)};
  }
`;

interface Props {
  className?: string;
}

export const Welcome: React.FC<Props> = ({ className }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fields: { slug: { eq: "welcome" } } }) {
          edges {
            node {
              html
            }
          }
        }
      }
    `
  );

  return (
    <div className={className}>
      <Title>Hello!</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: allMarkdownRemark.edges[0].node.html,
        }}
      />
    </div>
  );
};

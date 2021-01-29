import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { math, stripUnit } from 'polished';

import { ProfilePhoto } from 'components';
import { rhythm } from 'utils/typography';

/* @media (min-width: calc(1.53rem + 7.5rem + 1.53rem + 14rem + 1.53rem)) { */
const minGridWidth = `${stripUnit(math(`${rhythm(3)} + 7.5rem + 14rem`))}em`;
const Welcome = styled.div`
  @media (min-width: ${minGridWidth}) {
    display: grid;
    grid-template-columns: minmax(7.5rem, 14rem) minmax(14rem, 1fr);
    grid-template-rows: auto 1fr;
    grid-gap: ${rhythm(1)};
    margin-bottom: ${rhythm(2)};
  }

  @media (min-width: 48em) {
    display: block;
    margin-bottom: 0;
  }
`;

const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0;

  @media (min-width: 60em) {
    margin-bottom: ${rhythm(1)};
  }
`;

const ProfilePhotoContainer = styled(props => <ProfilePhoto {...props} />)`
  border-radius: 50%;
  grid-row: 1 / span 2;
  margin: 0 auto;
  max-width: 14rem;
  align-self: flex-start;

  & img {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.body.backgroundColor};
    transition: border 0.3s ease-in-out;
  }

export const Welcome: React.FC<Props> = ({ className }) => {
        query {
          allMarkdownRemark(filter: { fields: { slug: { eq: "welcome" } } }) {
            edges {
              node {
                html
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Welcome>
            <ProfilePhotoContainer />
            <Title>Hello!</Title>
            <div
              dangerouslySetInnerHTML={{
                __html: data.allMarkdownRemark.edges[0].node.html,
              }}
            />
          </Welcome>
        );
};

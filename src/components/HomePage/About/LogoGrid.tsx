import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { AboutQuery } from 'types/graphql';
import { rhythm } from 'utils/typography';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 50px;
  grid-gap: ${rhythm(1)};
  justify-items: center;
  margin: 0 0 ${rhythm(2)};
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    max-height: 50px;
    width: 200px;

    a {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    div,
    img {
      max-height: 100%;
      margin: 0 auto;
      /* width: 100%; */
    }
  }
`;

interface Props {
  logos: {
    logo: AboutQuery['allClientsJson']['edges'][0]['node']['logo'];
    name: string;
    url?: string;
  }[];
}

export const LogoGrid = ({ logos }: Props) => {
  return (
    <Container>
      {logos.map(({ logo, name, url }) => {
        const image =
          // eslint-disable-next-line no-nested-ternary
          !logo.childImageSharp && logo.extension === 'svg' ? (
            <img src={logo.publicURL} alt={`Logo of ${name}`} />
          ) : logo.childImageSharp && logo.extension !== 'svg' ? (
            <GatsbyImage
              image={logo.childImageSharp.gatsbyImageData}
              alt={`Logo of ${name}`}
            />
          ) : null;

        if (!image) {
          return null;
        }

        const logoElement = url ? <a href={url}>{image}</a> : image;

        return <div key={name}>{logoElement}</div>;
      })}
    </Container>
  );
};

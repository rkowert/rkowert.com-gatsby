import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  image: {
    childImageSharp: { gatsbyImageData: IGatsbyImageData };
    extension: string;
    publicURL: string;
  };
  alt: string;
}
export const BookCoverImage = ({ image, alt }: Props) =>
  // eslint-disable-next-line no-nested-ternary
  !image.childImageSharp && image.extension === 'svg' ? (
    <img src={image.publicURL} alt={alt} />
  ) : image.childImageSharp && image.extension !== 'svg' ? (
    <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={alt} />
  ) : null;

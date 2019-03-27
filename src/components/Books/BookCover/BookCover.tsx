import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  className?: string;
}

export default function BookCover({ className }: Props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "profile-photo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Img
            className={className}
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Photo of Dr. Rachel Kowert"
          />
        );
      }}
    />
  );
}

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

interface Props {
  className?: string;
}

export default function ProfilePhoto({ className }: Props) {
  return (
    <StaticQuery
      query={graphql`
        query ProfilePhoto {
          profilePhoto: file(relativePath: { eq: "profile-photo.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                width: 300
                quality: 100
                placeholder: TRACED_SVG
                layout: CONSTRAINED
              )
            }
          }
        }
      `}
      render={(data) => {
        return (
          <GatsbyImage
            image={data.profilePhoto.childImageSharp.gatsbyImageData}
            className={className}
            alt="Photo of Dr. Rachel Kowert"
          />
        );
      }}
    />
  );
}

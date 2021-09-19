import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

interface Props {
  className?: string;
}

export default function BookCover({ className }: Props) {
  return (
    <StaticQuery
      query={graphql`
        query BookCover {
          placeholderImage: file(relativePath: { eq: "profile-photo.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                width: 300
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
            image={data.placeholderImage.childImageSharp.gatsbyImageData}
            className={className}
            alt="Photo of Dr. Rachel Kowert"
          />
        );
      }}
    />
  );
}

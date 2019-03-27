import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  className?: string;
}

const ProfilePhoto = ({ className }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        profilePhoto: file(relativePath: { eq: "profile-photo.jpg" }) {
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
          fluid={data.profilePhoto.childImageSharp.fluid}
          alt="Photo of Dr. Rachel Kowert"
        />
      );
    }}
  />
);

export default ProfilePhoto;

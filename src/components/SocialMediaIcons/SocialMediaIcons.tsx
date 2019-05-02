import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  FaInstagram,
  FaLinkedin,
  FaResearchgate,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import styled from 'styled-components';

import { ScreenReadersOnly } from 'components';

const GoogleScholarIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    height="1em"
    width="1em"
    viewBox="0 0 1755 1755"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      transform="translate(0 1610) scale(1 -1)"
      d="M896.76 1130.189c-27.618 30.838-59.618 46.19-95.802 46.19-40.952 0-72.382-14.738-94.288-44.15-21.906-29.322-32.864-64.848-32.864-106.584 0-35.548 5.998-71.738 18-108.64 11.958-36.886 31.524-69.814 58.954-98.838 27.334-29.096 59.144-43.616 95.284-43.616 40.288 0 71.76 13.502 94.332 40.492 22.476 26.954 33.756 60.98 33.756 101.962 0 34.904-5.954 71.454-17.906 109.664-11.894 38.262-31.752 72.784-59.466 103.52zM1658.858 1512.573c-64.358 64.424-141.86 96.57-232.572 96.57h-1097.142c-90.712 0-168.14-32.146-232.572-96.57-64.424-64.286-96.57-141.86-96.57-232.572v-1097.142c0-90.712 32.146-168.288 96.57-232.712 64.432-64.146 142-96.432 232.572-96.432h1097.142c90.712 0 168.214 32.286 232.572 96.57 64.432 64.432 96.644 141.86 96.644 232.572v1097.142c0 90.712-32.22 168.288-96.644 232.572zM1297.81 1154.159v-392.126c0-18.154-14.856-33.016-33.016-33.016h-12.156c-18.162 0-33.016 14.856-33.016 33.016v392.126c0 16.12-2.34 29.578 20.188 32.41v52.172l-173.43-142.24c2.004-3.716 3.906-6.092 5.712-9.208 15.242-26.976 23.004-60.526 23.004-101.53 0-31.43-5.238-59.662-15.858-84.598-10.57-24.928-23.428-45.29-38.43-60.972-15.002-15.74-30.048-30.128-45.092-43.074-15.046-12.976-27.904-26.506-38.436-40.55-10.614-14-15.894-28.474-15.894-43.476 0-15.024 6.854-30.288 20.524-45.67 13.62-15.426 30.376-30.376 50.19-45.144 19.85-14.666 39.658-30.946 59.472-48.662 19.858-17.694 36.52-40.456 50.14-68.096 13.722-27.744 20.568-58.288 20.568-91.86 0-44.288-11.294-84.282-33.806-119.882-22.58-35.446-51.998-63.73-88.144-84.472-36.242-20.882-75-36.6-116.334-47.214-41.42-10.518-82.52-15.806-123.568-15.806-25.908 0-52.048 1.996-78.336 6.1-26.382 4.096-52.81 11.33-79.426 21.526-26.668 10.262-50.286 22.864-70.758 37.998-20.524 14.98-37.046 34.312-49.716 57.856-12.668 23.552-18.958 50.022-18.958 79.426 0 34.882 9.714 67.24 29.192 97.404 19.478 29.944 45.282 54.952 77.378 74.76 55.998 34.838 143.858 56.364 263.432 64.498-27.334 34.172-41.048 66.334-41.048 96.432 0 17.122 4.476 35.474 13.334 55.288-14.284-1.996-28.994-3.124-44.002-3.124-64.234 0-118.476 20.882-162.524 62.932-44.046 41.976-66.048 94.522-66.048 158.048 0 6.642 0.19 12.492 0.672 18.974h-261.046l393.618 342.17h651.856l-60.24-47.024v-82.996c22.368-2.874 20.004-16.318 20.004-32.394zM900.382 544.929c-7.52 1.36-18.088 2.122-31.708 2.122-29.382 0-58.288-2.596-86.666-7.782-28.38-5.046-56.378-13.568-83.998-25.592-27.722-11.952-50.096-29.528-67.146-52.766-17.144-23.208-25.666-50.542-25.666-81.994 0-29.974 7.52-56.714 22.572-80.004 15.002-23.142 34.808-41.26 59.428-54.236 24.62-12.998 50.432-22.814 77.378-29.264 26.998-6.408 54.476-9.736 82.476-9.736 55.376 0 103.050 12.47 143.046 37.406 39.906 24.928 59.904 63.422 59.904 115.382 0 10.928-1.522 21.686-4.528 32.19-3.138 10.62-6.24 19.712-9.282 27.26-3.050 7.41-8.858 16.332-17.43 26.616-8.522 10.314-15.046 17.934-19.434 23.004-4.476 5.238-12.852 12.712-25.19 22.594-12.236 9.926-20.048 16.114-23.522 18.402-3.43 2.406-12.332 8.908-26.668 19.456-14.328 10.634-22.184 16.274-23.566 16.94z"
    />
  </svg>
);

const SocialMediaIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & > a {
    border-radius: 50%;
    background: ${props => props.theme.socialMediaIcons.backgroundColor};
    color: ${props => props.theme.socialMediaIcons.color};
    padding: 0.4375rem;
    margin: 0 0.375rem 0.375rem;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    & > svg {
      width: 1.5rem;
      height: 100%;
    }

    &:hover {
      background: ${props => props.theme.socialMediaIcons.hoverBackgroundColor};
      color: ${props => props.theme.color.link.normal};
      text-decoration: none;
    }
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            social {
              gscholar
              instagram
              linkedin
              researchGate
              twitter
              youtube
            }
          }
        }
      }
    `}
    render={data => {
      const {
        gscholar,
        instagram,
        linkedin,
        researchGate,
        twitter,
        youtube,
      } = data.site.siteMetadata.social;
      return (
        <SocialMediaIcons>
          <a href={`https://twitter.com/${twitter}`}>
            <ScreenReadersOnly>Twitter</ScreenReadersOnly>
            <FaTwitter aria-hidden="true" />
          </a>
          <a href={`https://instagram.com/${instagram}`}>
            <ScreenReadersOnly>Instagram</ScreenReadersOnly>
            <FaInstagram aria-hidden="true" />
          </a>
          <a href={`https://linkedin.com/in/${linkedin}`}>
            <ScreenReadersOnly>LinkedIn</ScreenReadersOnly>
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href={`https://www.researchgate.net/profile/${researchGate}`}>
            <ScreenReadersOnly>researchGate</ScreenReadersOnly>
            <FaResearchgate aria-hidden="true" />
          </a>
          <a href={`https://scholar.google.ca/citations?user=${gscholar}`}>
            <ScreenReadersOnly>gscholar</ScreenReadersOnly>
            <GoogleScholarIcon aria-hidden="true" />
          </a>
          <a href={`https://www.youtube.com/channel/${youtube}`}>
            <ScreenReadersOnly>youtube</ScreenReadersOnly>
            <FaYoutube aria-hidden="true" />
          </a>
        </SocialMediaIcons>
      );
    }}
  />
);

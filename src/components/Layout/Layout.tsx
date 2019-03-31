import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import styled, { createGlobalStyle } from 'styled-components';

import { SiteHeader, SocialMediaIcons } from 'components';
import { rhythm } from 'utils/typography';

import { darkTheme, lightTheme, Theme } from './theme';

interface Props {
  children: React.ReactNode;
  transparentFooter?: boolean;
}

const BodyStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: { theme: Theme }) =>
      theme.body.backgroundColor};
    color: ${({ theme }: { theme: Theme }) => theme.body.color};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  a {
    color: ${({ theme }: { theme: Theme }) => theme.color.link.normal};
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${({ theme }: { theme: Theme }) => theme.color.link.hover};
    }

    &:focus {
      text-decoration: underline;
    }

    &:hover {
      transition: color 0.3s ease-in-out;
    }

    &:visited {
      color: ${({ theme }: { theme: Theme }) => theme.color.link.normal};
    }

    & > svg {
      vertical-align: middle;
    }
  }
`;

const PageContent = styled.div`
  margin: ${rhythm(1)} auto 0;
  max-width: 90rem;
  padding: 0 ${rhythm(1)};

  @media (min-width: 48em) {
    padding: 0 ${rhythm(2)};
  }
`;

const Footer = styled.footer`
  align-items: center;
  background: white;
  display: flex;
  margin: 0 auto;
  max-width: 90rem;
  padding: ${rhythm(1)};

  @media (min-width: 48em) {
    padding: ${rhythm(1)} ${rhythm(2)};
  }
`;

const Copyright = styled.p`
  margin: 0 0 0 auto;
`;

const Layout = ({ children, transparentFooter = false }: Props) => {
  const darkMode = useDarkMode(false, {
    onChange: () => {},
  });

  const footerStyles = transparentFooter ? { background: 'transparent' } : {};

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              author
              description
              keywords
              title
              navLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
          <>
            <BodyStyle />
            <SiteHeader
              siteTitle={data.site.siteMetadata.title}
              navLinks={data.site.siteMetadata.navLinks}
            />
            <PageContent>{children}</PageContent>
            <Footer style={footerStyles}>
              <SocialMediaIcons />
              <Copyright>
                © {new Date().getFullYear()}, {data.site.siteMetadata.author}
              </Copyright>
            </Footer>
          </>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;

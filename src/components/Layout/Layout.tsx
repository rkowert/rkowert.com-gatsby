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
    overflow-x: hidden;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &.has-overlay {
      overflow-y: hidden;
      touch-action: none;

      /* If nav menu is opened, then keep HeadRoom pinned */
      .headroom--unfixed,
      .headroom--unpinned {
        position: fixed;
        transform: translateY(0);
      }
    }
  }

  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(calc(-100% - 13px)); /* 100% + height of Header box-shadow */
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
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

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;

  body.has-overlay & {
    display: block;
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
            <Overlay />
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

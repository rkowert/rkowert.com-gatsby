import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import KupoKode from 'components/KupoKode';
import { SiteHeader } from 'components/SiteHeader';
import { SocialMediaIcons } from 'components/SocialMediaIcons';
import { rhythm } from 'utils/typography';

import { darkTheme, lightTheme } from './theme';

interface Props {
  children: React.ReactNode;
}

const BodyStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body.backgroundColor};
    color: ${({ theme }) => theme.body.color};
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
    z-index: 9999;
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
    color: ${({ theme }) => theme.color.link.normal};
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:visited {
      color: ${({ theme }) => theme.color.link.normal};
    }

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.color.link.hover};
    }

    &:focus {
      text-decoration: underline;
    }

    & > svg {
      vertical-align: middle;
    }

    &.anchor > svg {
      fill: ${({ theme }) => theme.body.color};
    }
  }

  h2 {
    border-bottom: 2px solid ${({ theme }) => theme.color.separator};
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
  margin: ${rhythm(2)} auto 0;
  max-width: 90rem;
  padding: 0 ${rhythm(1)} ${rhythm(1)};

  @media (min-width: 48em) {
    padding: 0 ${rhythm(2)} ${rhythm(1)};
  }
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 auto;
  max-width: 90rem;
  padding: ${rhythm(1)};

  @media (min-width: 48em) {
    flex-direction: row;
    padding: ${rhythm(1)} ${rhythm(2)};
  }
`;

const Copyright = styled.p`
  margin: ${rhythm(1)} auto;

  @media (min-width: 48em) {
    margin: 0 0 0 auto;
  }
`;

export const Layout: React.FC<Props> = ({ children }: Props) => {
  const darkMode = useDarkMode(false, {
    onChange: () => null,
  });

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
                target
              }
            }
          }
        }
      `}
      render={(data) => (
        <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
          <React.Fragment>
            <BodyStyle />
            <Overlay />
            <KupoKode />
            <SiteHeader
              siteTitle={data.site.siteMetadata.title}
              navLinks={data.site.siteMetadata.navLinks}
            />
            <PageContent>{children}</PageContent>
            <Footer>
              <SocialMediaIcons />
              <Copyright>
                © {new Date().getFullYear()}, {data.site.siteMetadata.author}
              </Copyright>
            </Footer>
          </React.Fragment>
        </ThemeProvider>
      )}
    />
  );
};

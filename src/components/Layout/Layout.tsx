/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { SiteHeader } from 'components';
import * as styles from './Layout.module.css';
import './global.css';
import SocialMediaIcons from 'components/SocialMediaIcons/index';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
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
      <>
        <SiteHeader
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
        />
        <div className={styles.PageContent}>{children}</div>
        <footer className={styles.SiteFooter}>
          <SocialMediaIcons />
          <p className={styles.Copyright}>
            © {new Date().getFullYear()}, {data.site.siteMetadata.author}
          </p>
        </footer>
      </>
    )}
  />
);

export default Layout;

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Header } from 'components';
import * as styles from './Layout.module.css';
import './global.css';

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
        <Header
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
        />
        <div className={styles.PageContent}>{children}</div>
        <footer>
          © {new Date().getFullYear()}, {data.site.siteMetadata.author}
        </footer>
      </>
    )}
  />
);

export default Layout;

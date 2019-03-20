/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react";
import { StaticQuery, graphql } from "gatsby"
// import {Helmet} from 'react-helmet';

import {Header, SEO} from '../../components';
import "./layout.css";

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
        {/* <Helmet
          title={'tite'}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
        </Helmet> */}
        <Header siteTitle={data.site.siteMetadata.title} navLinks={data.site.siteMetadata.navLinks} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
          }}
        >
          <div>{children}</div>
          <footer>
            © {new Date().getFullYear()}, {data.site.siteMetadata.author}
          </footer>
        </div>
      </>
    )}
  />
);

export default Layout;

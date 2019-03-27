import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { ProfilePhoto } from 'components';

import * as styles from './Welcome.module.css';

const Welcome = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { fields: { slug: { eq: "welcome" } } }) {
          edges {
            node {
              html
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={styles.Welcome}>
          <ProfilePhoto className={styles.ProfilePhoto} />
          <p className={styles.Title}>Hello!</p>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </div>
      );
    }}
  />
);

export default Welcome;

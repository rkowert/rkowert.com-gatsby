import * as React from 'react';
import { graphql, Link } from 'gatsby';

import {
  Image,
  Layout,
  RecentBlogPosts,
  SEO,
  SocialMediaIcons,
  Welcome,
} from 'components';

import * as styles from './Home.module.css';

const Home = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={['rachel', 'kowert', 'psychology', 'gaming']} />
    <main className={styles.Home}>
      <section className={styles.Hello}>
        <div>
          <div className={styles.Left}>
            {/* <ProfilePic /> */}
            <Welcome />
            <SocialMediaIcons />
            {/* <LatestTweet /> */}
            {/* <LatestInstagram /> */}
          </div>
          <div className={styles.Right}>
            <h2>Recent Blog Posts</h2>
            <RecentBlogPosts posts={posts} />
          </div>
        </div>
      </section>
      <section className="AboutSection" />
      <section className="Publications" />
      <section className="Media" />
      <section className="Contact" />

      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/foo/">Go to page foo</Link>
    </main>
  </Layout>
);

export default Home;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog-posts" } } }
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 350)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`;

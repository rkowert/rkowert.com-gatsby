import * as React from 'react';
import { Link } from 'gatsby';

import { Image, Layout, SEO } from 'components';

import * as styles from './Home.module.css';

const Home = () => (
  <Layout>
    <SEO title="Home" keywords={['rachel', 'kowert', 'psychology', 'gaming']} />
    <section className="Hello">
      <div className={styles.Left}>
        {/* <Welcome /> */}
        {/* <SocialMediaIcons /> */}
        {/* <LatestTweet /> */}
        {/* <LatestInstagram /> */}
      </div>
      <div className={styles.Right}>{/* <RecentBlogPosts /> */}</div>
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
  </Layout>
);

export default Home;

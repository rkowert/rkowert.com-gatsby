import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa/index.mjs';

import { Layout, SEO } from 'components';
import { BlogPost as BlogPostType } from 'types';
import { formatPostDate, formatReadingTime } from 'utils/helpers';
// import { rhythm, scale } from 'utils/typography';

import * as styles from './BlogPostPage.module.css';
import TagCloud from 'components/TagCloud';

interface Props {
  data: {
    markdownRemark: BlogPostType;
  };
  pageContext: {
    next?: BlogPostType;
    prev?: BlogPostType;
  };
}

const GITHUB_USERNAME = 'rkowert';
const GITHUB_REPO_NAME = 'rkowert.com';

export default function BlogPostPage({ data, pageContext }: Props) {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;
  const lang = 'en';
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog/${
    post.fields.slug
  }/index${lang === 'en' ? '' : `.${lang}`}.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://rkowert.com${post.fields.path}`
  )}`;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        // slug={post.fields.slug}
        // image={
        //   post.frontmatter.cover
        //     ? post.frontmatter.cover.childImageSharp.sizes.src
        //     : '/icons/icon-256x256.png'
        // }
      />
      {/* TODO Replace <main> with <Container /> */}
      <div className={styles.BlogPostPage}>
        <main>
          <article>
            <header>
              <h1 className={styles.Title}>{post.frontmatter.title}</h1>
              <p>
                {formatPostDate(post.frontmatter.date)}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer>
              <p>
                <a href={discussUrl} target="_blank" rel="noopener noreferrer">
                  Discuss on Twitter
                </a>
                {' • '}
                <a href={editUrl} target="_blank" rel="noopener noreferrer">
                  Edit on GitHub
                </a>
              </p>
              <nav
                className={styles.BlogNavigation}
                aria-label="Blog navigation"
              >
                {prev && (
                  <Link to={prev.fields.path} rel="prev">
                    <FaArrowLeft aria-hidden="true" /> Older
                    <p>{prev.frontmatter.title}</p>
                  </Link>
                )}
                {next && (
                  <Link to={next.fields.path} rel="next">
                    Newer <FaArrowRight aria-hidden="true" />
                    <p>{next.frontmatter.title}</p>
                  </Link>
                )}
              </nav>
            </footer>
          </article>
        </main>
        <div className={styles.BlogSidebar}>
          <h3>Tag Cloud</h3>
          <TagCloud />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      excerpt
      fields {
        path
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      html
      timeToRead
    }
  }
`;

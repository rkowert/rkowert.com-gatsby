import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa/index.mjs';

import { formatPostDate, formatReadingTime } from 'utils/helpers';
import { Layout, SEO } from 'components';
// import { rhythm, scale } from 'utils/typography';
import { BlogPost as BlogPostType } from 'types';
import * as styles from './BlogPost.module.css';

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

export default function BlogPost({ data, pageContext }: Props) {
  const { markdownRemark: post } = data;
  console.log(pageContext);
  const { next, prev } = pageContext;
  const lang = 'en';
  const enSlug = post.fields.slug;
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog/${enSlug.slice(
    1,
    enSlug.length - 1
  )}/index${lang === 'en' ? '' : `.${lang}`}.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://rkowert.com${enSlug}`
  )}`;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        slug={post.fields.slug}
        // image={
        //   post.frontmatter.cover
        //     ? post.frontmatter.cover.childImageSharp.sizes.src
        //     : '/icons/icon-256x256.png'
        // }
      />
      {/* TODO Replace <main> with <Container /> */}
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
            <nav className={styles.BlogNavigation} aria-label="Blog navigation">
              {prev && (
                <Link to={prev.fields.slug} rel="prev">
                  <FaArrowLeft aria-hidden="true" /> Older
                  <p>{prev.frontmatter.title}</p>
                </Link>
              )}
              {next && (
                <Link to={next.fields.slug} rel="next">
                  Newer <FaArrowRight aria-hidden="true" />
                  <p>{next.frontmatter.title}</p>
                </Link>
              )}
            </nav>
          </footer>
        </article>
      </main>
      <aside />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      fields {
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

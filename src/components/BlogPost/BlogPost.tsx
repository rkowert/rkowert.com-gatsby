import * as React from 'react';
import { graphql } from 'gatsby';

import { formatPostDate, formatReadingTime } from 'utils/helpers';
import { Layout, SEO } from 'components';
// import { rhythm, scale } from 'utils/typography';

const GITHUB_USERNAME = 'rkowert';
const GITHUB_REPO_NAME = 'rkowert.com';

export default function BlogPost({ data, pageContext }) {
  const { markdownRemark: post } = data;
  const { next, previous, slug } = pageContext;
  const lang = 'en';
  const enSlug = slug;
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog/${enSlug.slice(
    1,
    enSlug.length - 1
  )}/index${lang === 'en' ? '' : `.${lang}`}.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://rkowert.com${enSlug}`
  )}`;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <main>
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
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

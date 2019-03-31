import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa/index.mjs';
import styled from 'styled-components';

import { Layout, SEO } from 'components';
import { BlogPost as BlogPostType } from 'types';
import { formatPostDate, formatReadingTime } from 'utils/helpers';
import { rhythm } from 'utils/typography';

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

const BlogPostPage = styled.div`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 1fr minmax(12rem, 16rem);
    grid-gap: ${rhythm(2)};
  }
`;

const Title = styled.h1`
  margin-bottom: ${rhythm(1 / 2)};
`;

const BlogNavigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & a {
    max-width: 40%;

    &[rel='next'] {
      margin-left: auto;
      text-align: right;
    }

    & p {
      font-weight: bold;
    }
  }
`;

const BlogSidebar = styled.div`
  & h3 {
    border-bottom: 2px solid ${props => props.theme.color.separator};
    margin-bottom: ${rhythm(1 / 2)};
  }
`;

const GITHUB_USERNAME = 'rkowert';
const GITHUB_REPO_NAME = 'rkowert.com';

export default function({ data, pageContext }: Props) {
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
      <BlogPostPage>
        <main>
          <article>
            <header>
              <Title>{post.frontmatter.title}</Title>
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
              <BlogNavigation aria-label="Blog navigation">
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
              </BlogNavigation>
            </footer>
          </article>
        </main>
        <BlogSidebar>
          <h3>Tag Cloud</h3>
          <TagCloud />
        </BlogSidebar>
      </BlogPostPage>
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

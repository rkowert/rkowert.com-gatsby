import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

import { BlogPage, Layout, SEO, TagList } from 'components';
import { BlogPost as BlogPostType } from 'types';
import { formatPostDate, formatReadingTime } from 'utils/helpers';
import { rhythm } from 'utils/typography';

interface Props {
  data: {
    markdownRemark: BlogPostType;
  };
  pageContext: {
    next?: BlogPostType;
    prev?: BlogPostType;
  };
}

const Title = styled.h1`
  margin-bottom: ${rhythm(1 / 2)};
`;

const PostMeta = styled.p`
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
      <BlogPage>
        <main>
          <article>
            <header>
              <Title>{post.frontmatter.title}</Title>
              <PostMeta>
                {formatPostDate(post.frontmatter.date)}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </PostMeta>
              <TagList tags={post.frontmatter.tags} />
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
      </BlogPage>
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
        tags
        title
      }
      html
      timeToRead
    }
  }
`;

import * as React from 'react';
import { Link } from 'gatsby';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styled from 'styled-components';

import { formatPostDate, formatReadingTime } from 'utils/helpers';
import { BlogPost } from 'types';
import { rhythm } from 'utils/typography';

interface Props {
  post: BlogPost;
}

const BlogPostExcerpt = styled.div`
  border-bottom: 2px solid ${props => props.theme.color.separator};
  margin-bottom: ${rhythm(1)};
`;

const Title = styled.h3`
  margin-bottom: 0;
`;

const Date = styled.p`
  color: ${props => props.theme.color.text.subdued};
  font-family: 'Muli', sans-serif;
  font-weight: 300;
`;

const Excerpt = styled.div`
  & > p:last-child {
    margin-bottom: 0;
  }
`;

const ContinueReadingLink = styled(Link)`
  & svg {
    vertical-align: middle;
  }
`;

export default function({ post }: Props) {
  return (
    <BlogPostExcerpt key={post.id}>
      <Title>
        <Link to={post.fields.path}>{post.frontmatter.title}</Link>
      </Title>
      <Date>
        {formatPostDate(post.frontmatter.date)}
        {` • ${formatReadingTime(post.timeToRead)}`}
      </Date>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: post.excerpt
            // Replace headings with bolded text
            .replace(/(<\/?)h[1-6](.*?>)/g, '$1b>')
            // Removee page anchors
            .replace(/<a.*?class="anchor".*?>.*?<\/a>/g, '')
            // Remove links
            .replace(/<a.*?>(.*?)<\/a>/g, '$1'),
        }}
      />
      <p>
        <ContinueReadingLink to={post.fields.path}>
          Continue reading <FaLongArrowAltRight atia-hidden="true" />
        </ContinueReadingLink>
      </p>
    </BlogPostExcerpt>
  );
}

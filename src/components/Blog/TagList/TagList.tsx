import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { slugize } from 'utils/helpers';
import { rhythm } from 'utils/typography';

const TagList = styled.ul`
  display: flex;
  justify-items: space-between;
  list-style-type: none;
  margin: 0 0 ${rhythm(1)};
`;

const Tag = styled.li`
  display: inline-block;
  margin: 0 ${rhythm(1 / 2)} 0 0;
`;

const TagLink = styled(Link)`
  background-color: ${({ theme }) => theme.tagList.tag.backgroundColor};
  border-radius: ${rhythm(1 / 2)};
  color: ${({ theme }) => theme.tagList.tag.color};
  display: inline-block;
  padding: 0 ${rhythm(1 / 3)};
  transition: background-color 0.6s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.tagList.tag.hoverBackgroundColor};
    color: ${({ theme }) => theme.tagList.tag.color};
  }
`;

interface Props {
  tags: string[];
}

export default function({ tags }: Props) {
  return (
    <TagList>
      {tags.map(tag => {
        const tagKey = slugize(tag);
        return (
          <Tag key={tagKey}>
            <TagLink to={`/blog/tag/${tagKey}`}>{tag}</TagLink>
          </Tag>
        );
      })}
    </TagList>
  );
}

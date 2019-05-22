import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { slugize } from 'utils/helpers';
import { rhythm } from 'utils/typography';

const Label = styled.span`
  display: block;
  margin-bottom: ${rhythm(1 / 4)};
`;

const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  margin: 0 0 ${rhythm(1)};
`;

const Tag = styled.li`
  display: inline-block;
  margin: 0 ${rhythm(1 / 4)} ${rhythm(1 / 2)} 0;

  &:last-child {
    margin-right: 0;
  }
`;

const TagLink = styled(Link)`
  background-color: ${({ theme }) => theme.tagList.tag.backgroundColor};
  border-radius: ${rhythm(1 / 2)};
  color: ${({ theme }) => theme.tagList.tag.color};
  display: inline-block;
  padding: 0 ${rhythm(1 / 3)};
  transition: background-color 0.3s ease-in-out;

  &:visited {
    color: ${({ theme }) => theme.tagList.tag.color};
  }

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
    <React.Fragment>
      <Label>Tagged with:</Label>
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
    </React.Fragment>
  );
}

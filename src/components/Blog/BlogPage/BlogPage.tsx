import React from 'react';
import styled from 'styled-components';

import { TagCloud } from 'components';
import { rhythm } from 'utils/typography';

const BlogPage = styled.div`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: minmax(auto, 48rem) minmax(12rem, 16rem);
    grid-gap: ${rhythm(2)};
    justify-content: center;
    margin-top: ${rhythm(2)};
  }
`;

const BlogSidebar = styled.div`
  & h3 {
    border-bottom: 2px solid ${props => props.theme.color.separator};
    margin-bottom: ${rhythm(1 / 2)};
  }
`;

export default function({ children }) {
  return (
    <BlogPage>
      {children}
      <BlogSidebar>
        <h3>Tag Cloud</h3>
        <TagCloud />
      </BlogSidebar>
    </BlogPage>
  );
}

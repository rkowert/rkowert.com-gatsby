import React from 'react';
import styled from 'styled-components';

import { AudioJson, PrintJson, VideoJson } from 'types/graphql';
import { rhythm } from 'utils/typography';

interface Props {
  press: AudioJson | PrintJson | VideoJson;
}

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
  font-style: italic;
`;

const Source = styled.p`
  font-size: 0.85em;
`;

export const PressItem = ({ press }: Props) => {
  return (
    <div>
      <Title>
        <a href={press.url}>{press.title}</a>
      </Title>
      <Source>{press.source}</Source>
    </div>
  );
};

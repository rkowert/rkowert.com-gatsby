import React from 'react';
import styled from 'styled-components';

import { KeepCalmAndGameOn } from 'components';
import { rhythm } from 'utils/typography';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-width: 50rem;

  & > div {
    margin: ${rhythm(1)} auto 0;
    max-width: 15rem;
    order: 99;
  }

  @media (min-width: 48rem) {
    display: block;

    & > div {
      float: right;
      margin: 0 0 ${rhythm(2)} ${rhythm(2)};
    }
  }
`;

export const About: React.FC = () => {
  return (
    <Container>
      <h2 id="about">About Me</h2>
      <KeepCalmAndGameOn />
      <p>
        I am currently the Research Director for{' '}
        <a href="http://www.takethis.org/">Take This</a>, a non-profit
        organization that provides mental health information and resources to
        the gaming community and industry. I am also the Chief Scientific
        Officer of{' '}
        <a href="https://www.kitsuneanalytics.com/">Kitsune Analytics</a>.
      </p>
      <h3>Current Projects</h3>
      <ul>
        <li>
          Examining the links between unintentional learning, knowledge
          transfer, and psychological well-being within digital games
        </li>
        <li>
          Assessing Internet Gaming Disorder as a primary or secondary diagnosis
        </li>
        <li>
          Identifying initiates to better understand and mitigate dark
          participation within gaming cultures
        </li>
        <li>Reconceptualizing “video game involvement”</li>
        <li>
          Evaluating the potential for video game play to mitigate symptoms of
          PTSD among veterans
        </li>
      </ul>
    </Container>
  );
};

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Layout, SEO } from 'components';
import { rhythm } from 'utils/typography';

const H3 = styled.h3`
  margin-bottom: ${rhythm(1 / 2)};
`;

interface Props {}

export default function CVPage(props: Props) {
  const {} = props;
  return (
    <Layout>
      <SEO title="Resources" />
      <main>
        <h1>Resources</h1>

        <H3>
          <Link to="/resources/ludodemia">Ludodemia</Link>
        </H3>
        <p>
          A searchable database of game studies' journal articles, conference
          proccedings, research reports, books, and book chapters, organized by
          topic.
        </p>

        <H3>
          <Link to="/resources/games-research-journals">
            Games Research Journals
          </Link>
        </H3>
        <p>
          A comprehensive listing of academic journals and publications known to
          publish research related to digital games.
        </p>

        <H3>
          <Link to="/resources/games-research-positions">
            Games Research Positions
          </Link>
        </H3>
        <p>
          A comprehensive listing of academic positions related to gaming
          research.
        </p>

        <H3>
          <Link to="/resources/games-research-twitter">
            Games Researchers on Twitter
          </Link>
        </H3>
        <p>
          A listing of people on Twitter who write about, talk about, or study
          the overlap between video games and academic fields like psychology,
          communications, economics, sociology, etc.
        </p>
      </main>
    </Layout>
  );
}

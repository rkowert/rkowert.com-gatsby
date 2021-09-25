import React from 'react';
import styled from 'styled-components';

import KeepCalmAndGameOn from 'components/KeepCalmAndGameOn';
import { rhythm } from 'utils/typography';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { LogoGrid } from './LogoGrid';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-width: 50rem;

  @media (min-width: 48rem) {
    display: block;
  }
`;

const HorizontalList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: ${rhythm(1 / 2)};
  justify-items: center;
  margin: 0 0 ${rhythm(2)};
  width: 100%;
  /* display: flex;
  flex-wrap: wrap;
  margin: 0 0 ${rhythm(2)} -3ch;
  list-style: none;
  clip-path: inset(0 0 0 3ch); */

  > li {
    display: inline-block;
    /* margin: 0 ${rhythm(1 / 2)}; */
    margin: 0;
    padding-left: 1ch;
    white-space: nowrap;

    &::before {
      content: '•';
      display: inline-block;
      margin-right: 1ch;
      width: 1ch;
      text-align: center;
    }
    /*&::after {
      content: '•';
      position: relative;
      left: ${rhythm(1 / 2)};
    }

    &:last-child::after {
      display: none;
    }*/
  }
`;

const StyledKeepCalmAndGameOn = styled(KeepCalmAndGameOn)`
  margin: ${rhythm(1)} auto 0;
  max-width: 15rem;
  order: 99;

  @media (min-width: 48rem) {
    float: right;
    margin: 0 0 ${rhythm(2)} ${rhythm(2)};
  }
`;

const removeNodes = (list: { node: unknown }[]) =>
  list.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue.node);
    return previousValue;
  }, []);

export const About = () => {
  const {
    allClientsJson: { edges: clients },
    allMediaJson: { edges: media },
  } = useStaticQuery(
    graphql`
      query About {
        allClientsJson {
          edges {
            node {
              name
              logo {
                childImageSharp {
                  gatsbyImageData(
                    height: 50
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                  )
                }
                extension
                publicURL
              }
              url
            }
          }
        }
        allMediaJson {
          edges {
            node {
              name
              logo {
                childImageSharp {
                  gatsbyImageData(
                    height: 50
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                  )
                }
                extension
                publicURL
              }
              url
            }
          }
        }
      }
    `
  );

  return (
    <Container>
      <h2 id="about">About Me</h2>
      <StyledKeepCalmAndGameOn />
      <p>
        Rachel Kowert, Ph.D is a research psychologist and the Research Director
        of <a href="http://www.takethis.org/">Take This</a>. She is a
        world-renowned researcher on the uses and effects of digital games,
        including their impact on physical, social, and psychological
        well-being. An award-winning author, she has published a variety of
        books and scientific articles relating to the psychology of games and,
        more recently, the relationship between games and mental health
        specifically. Her published works include peer-reviewed books such as{' '}
        <Link to="/books#the-video-game-debate">The Video Game Debate</Link>,{' '}
        <Link to="/books#the-video-game-debate-2">The Video Game Debate 2</Link>
        , and{' '}
        <Link to="/books#video-games-and-well-being">
          Video Games and Well-being: Press Start
        </Link>
        , as well as community-focused books such as{' '}
        <Link to="/books#a-parent-s-guide-to-video-games">
          A Parent’s Guide to Video Games
        </Link>
        , and <Link to="/books#pragmatic-princess">Pragmatic Princess</Link>.
        Recently, she founded her YouTube channel{' '}
        <a href="https://www.youtube.com/psychgeist">Psychgeist</a>, which
        serves to bridge the gap between moral panic and scientific knowledge on
        a variety of psychology and game-related topics.
      </p>

      <h3>As seen in</h3>
      <LogoGrid logos={removeNodes(media)} />

      <h3>Available for</h3>
      <HorizontalList role="list">
        <li>Feature writing</li>
        <li>Guest editing</li>
        <li>Research & Consultation</li>
        <li>Interviews</li>
        <li>Guest Speaking</li>
        <li>Workshops</li>
      </HorizontalList>

      <h3>Previous collaborations</h3>
      <LogoGrid logos={removeNodes(clients)} />
    </Container>
  );
};

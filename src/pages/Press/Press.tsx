import React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';
import { FaHeadphones, FaNewspaper, FaTv } from 'react-icons/fa';

import { Layout, SEO } from 'components';
import { PressPageQuery } from 'types/graphql';
import { PressItem } from 'components/Press/PressItem';
import { rhythm } from 'utils/typography';

const Main = styled.main`
  margin: 0 auto;
  max-width: 65rem; /* 50rem + 15rem */
`;

const SectionHeading = styled.h2`
  display: flex;
  align-items: center;

  > svg {
    margin-right: ${rhythm(1)};
  }
`;

type Props = PageProps<PressPageQuery>;

export const Press = ({
  data: {
    allAudioJson: { edges: audio },
    allPrintJson: { edges: print },
    allVideoJson: { edges: video },
  },
}: Props) => {
  return (
    <Layout>
      <SEO
        title="Press & Media"
        keywords={['rachel', 'kowert', 'psychology', 'gaming']}
      />
      <Main>
        <h1>Press &amp; Media</h1>
        <SectionHeading>
          <FaNewspaper />
          Print
        </SectionHeading>
        {print.map(({ node }) => (
          <PressItem press={node} key={node.id} />
        ))}
        <SectionHeading>
          <FaTv />
          Video
        </SectionHeading>
        {video.map(({ node }) => (
          <PressItem press={node} key={node.id} />
        ))}
        <SectionHeading>
          <FaHeadphones />
          Audio
        </SectionHeading>
        {audio.map(({ node }) => (
          <PressItem press={node} key={node.id} />
        ))}
      </Main>
    </Layout>
  );
};

export default Press;

export const pageQuery = graphql`
  query PressPage {
    allAudioJson {
      edges {
        node {
          id
          source
          title
          url
        }
      }
    }
    allPrintJson {
      edges {
        node {
          id
          source
          # thumbnail {
          #   childImageSharp {
          #     gatsbyImageData(
          #       height: 50
          #       placeholder: TRACED_SVG
          #       layout: CONSTRAINED
          #     )
          #   }
          #   extension
          #   publicURL
          # }
          title
          url
        }
      }
    }
    allVideoJson {
      edges {
        node {
          id
          source
          title
          url
        }
      }
    }
  }
`;

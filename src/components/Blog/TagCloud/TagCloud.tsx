import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import slug from 'slug';

const fontSizeConverter = (count, min, max, minSize, maxSize) => {
  if (max - min === 0) {
    // handle devision by zero
    return (minSize + maxSize) / 2;
  }
  return ((count - min) * (maxSize - minSize)) / (max - min) + minSize;
};

const TagCloud = styled.div`
  & a {
    display: inline-block;
    line-height: 1;
  }
`;

export default function() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: { fields: { collection: { eq: "blog-posts" } } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges } }) => {
        const tags = edges.reduce((tags, { node }) => {
          node.frontmatter.tags.forEach(tag => {
            if (tags[tag] == null) {
              tags[tag] = 0;
            }
            tags[tag] += 1;
          });
          return tags;
        }, {});

        const tagCloudData = Object.keys(tags)
          .sort()
          .map(tag => ({
            value: tag,
            count: tags[tag],
            key: slug(tag).toLowerCase(),
          }));

        const counts = tagCloudData.map(tag => tag.count);
        const min = Math.min(...counts);
        const max = Math.max(...counts);
        const minFontSize = 0.625;
        const maxFontSize = 2.5;

        const data = tagCloudData.map(tag => ({
          tag,
          fontSize: fontSizeConverter(
            tag.count,
            min,
            max,
            minFontSize,
            maxFontSize
          ),
        }));

        return (
          <TagCloud>
            {data.map(({ tag, fontSize }) => (
              <Link to={`/blog/tag/${tag.key}`} key={tag.key}>
                <span style={{ fontSize: `${fontSize}rem` }}>{tag.value}</span>
                {'\u00A0'}
              </Link>
            ))}
          </TagCloud>
        );
      }}
    />
  );
}

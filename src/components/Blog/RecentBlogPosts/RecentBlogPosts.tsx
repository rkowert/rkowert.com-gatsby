import * as React from 'react';
import { Link } from 'gatsby';

import { BlogPostExcerpt } from 'components';
import { BlogPost } from 'types';

interface Props {
  data?: {
    allMarkdownRemark: {
      edges: {
        node: BlogPost;
      }[];
    };
  };
  limit?: number;
  posts: {
    node: BlogPost;
  }[];
}

const RecentBlogPosts = ({
  // data: {
  //   allMarkdownRemark: { edges: posts },
  // },
  limit = 3,
  posts,
}: Props) => {
  return (
    <div>
      {posts.slice(0, limit).map(({ node: post }) => (
        <BlogPostExcerpt key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RecentBlogPosts;

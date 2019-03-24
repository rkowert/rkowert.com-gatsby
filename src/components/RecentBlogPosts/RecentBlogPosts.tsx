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
        // <div className={styles.RecentBlogPost} key={post.id}>
        //   <h3 className={styles.Title}>
        //     <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        //   </h3>
        //   <p className={styles.Date}>
        //     {formatPostDate(post.frontmatter.date)}
        //     {` • ${formatReadingTime(post.timeToRead)}`}
        //   </p>
        //   <div
        //     className={styles.Excerpt}
        //     dangerouslySetInnerHTML={{
        //       __html: post.excerpt,
        //     }}
        //   />
        //   <p>
        //     <Link to={post.fields.slug} className={styles.ContinueReadingLink}>
        //       Continue reading ➜
        //     </Link>
        //   </p>
        // </div>
        <BlogPostExcerpt key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RecentBlogPosts;

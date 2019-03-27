import * as React from 'react';
import { Link } from 'gatsby';
import { FaLongArrowAltRight } from 'react-icons/fa/index.mjs';

import { formatPostDate, formatReadingTime } from 'utils/helpers';
import { BlogPost } from 'types';
import * as styles from './BlogPostExcerpt.module.css';

interface Props {
  post: BlogPost;
}

export default function BlogPostExcerpt({ post }: Props) {
  return (
    <div className={styles.BlogPostExcerpt} key={post.id}>
      <h3 className={styles.Title}>
        <Link to={post.fields.path}>{post.frontmatter.title}</Link>
      </h3>
      <p className={styles.Date}>
        {formatPostDate(post.frontmatter.date)}
        {` • ${formatReadingTime(post.timeToRead)}`}
      </p>
      <div
        className={styles.Excerpt}
        dangerouslySetInnerHTML={{
          __html: post.excerpt,
        }}
      />
      <p>
        <Link to={post.fields.path} className={styles.ContinueReadingLink}>
          Continue reading <FaLongArrowAltRight atia-hidden="true" />
        </Link>
      </p>
    </div>
  );
}

import React from 'react';

import type { JournalArticle as JournalArticleType } from 'types/cv';

import Publication from './Publication';

interface Props {
  article: JournalArticleType;
}

export default function JournalArticle({ article }: Props) {
  const authors = article.authors.replace(/\.$/, '');
  const title = article.url ? (
    <a href={article.url}>{article.title}</a>
  ) : (
    article.title
  );

  return (
    <span>
      {authors}. ({article.date}). {title}.{' '}
      <Publication publication={article.publication} />
    </span>
  );
}

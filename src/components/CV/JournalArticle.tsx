import React from 'react';

import { CV } from 'types';

interface Props {
  article: CV.JournalArticle;
}

function formatEdition(edition) {
  if (edition == null) return;

  const matches = edition.match(/^(\d+)(\(\d+\))$/);
  if (matches && matches.length === 3) {
    return (
      <span>
        , <i>{matches[1]}</i>
        {matches[2]}
      </span>
    );
  }

  return `, ${edition}`;
}

export default function JournalArticle({ article }: Props) {
  const authors = article.authors.replace(/\.$/, '');
  const title = article.url ? (
    <a href={article.url}>{article.title}</a>
  ) : (
    article.title
  );
  const pages = article.publication.pages;
  const publisherMarkup = (
    <span>
      <i>{article.publication.title}</i>
      {formatEdition(article.publication.edition)}
      {pages ? `, ${pages}` : ''}
    </span>
  );
  const doi = article.publication.doi ? ` doi: ${article.publication.doi}` : '';

  return (
    <span>
      {authors}. ({article.date}). {title}. {publisherMarkup}.{doi}
    </span>
  );
}

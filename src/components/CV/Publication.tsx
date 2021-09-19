import React from 'react';

import type { Publication as PublicationType } from 'types/cv';

interface Props {
  publication: PublicationType;
}

function formatEdition(edition: PublicationType['edition']) {
  if (edition == null) return null;

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

export default function Publication({ publication }: Props) {
  const { doi, edition, pages, url } = publication;
  const title = url ? <a href={url}>{publication.title}</a> : publication.title;
  return (
    <span>
      <i>{title}</i>
      {formatEdition(edition)}
      {pages ? `, ${pages}` : ''}.{doi ? ` doi: ${doi}` : ''}
    </span>
  );
}

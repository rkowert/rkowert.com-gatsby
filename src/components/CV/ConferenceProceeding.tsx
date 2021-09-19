import React from 'react';

import type { ConferenceProceeding as ConferenceProceedingType } from 'types/cv';

interface Props {
  proceeding: ConferenceProceedingType;
}

export default function ConferenceProceeding({
  proceeding: { authors, conference, date, title, url },
}: Props) {
  const authorsMarkup = authors.replace(/\.$/, '');
  const titleMarkup = url ? <a href={url}>{title}</a> : title;
  const conferenceMarkup = `${conference.title}. ${conference.location}.`;

  return (
    <span>
      {authorsMarkup}. ({date}). {titleMarkup}. {conferenceMarkup}.
    </span>
  );
}

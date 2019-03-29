import React from 'react';

import { CV } from 'types';

interface Props {
  proceeding: CV.ConferenceProceeding;
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

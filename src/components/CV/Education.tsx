import React from 'react';
import { CV } from 'types';

interface Props {
  education: CV.Education;
}

export default function Education({
  education: { degree, source, url, year },
}: Props) {
  const sourceMarkup = url ? <a href={url}>{source}</a> : source;
  return (
    <span>
      {degree}, {sourceMarkup}
    </span>
  );
}

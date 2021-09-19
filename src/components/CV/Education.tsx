import React from 'react';
import type { Education as EducationType } from 'types/cv';

interface Props {
  education: EducationType;
}

export default function Education({
  education: { degree, source, url },
}: Props) {
  const sourceMarkup = url ? <a href={url}>{source}</a> : source;
  return (
    <span>
      {degree}, {sourceMarkup}
    </span>
  );
}

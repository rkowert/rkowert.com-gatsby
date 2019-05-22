import React from 'react';
import { CV } from 'types';

interface Props {
  appointment: CV.ProfessionalAppointment;
}

export default function ProfessionalAppointment({
  appointment: { title, organization },
}: Props) {
  const organizationMarkup = organization.url ? (
    <a href={organization.url}>{organization.title}</a>
  ) : (
    organization.title
  );
  return (
    <span>
      {title}, {organizationMarkup}
    </span>
  );
}

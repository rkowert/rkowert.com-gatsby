import React from 'react';
import { ProfessionalAppointment as ProfessionalAppointmentType } from 'types/cv';

interface Props {
  appointment: ProfessionalAppointmentType;
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

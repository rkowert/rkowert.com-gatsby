import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { rhythm } from 'utils/typography';

interface Props {
  children: React.ReactNode;
  date: string;
  reset?: boolean;
}

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: ${rhythm(1)};
`;

const DateCell = styled.div`
  min-width: 7rem;
`;

let lastYear = '';

export default function DatedEntry({ children, date, reset = false }: Props) {
  const formattedYear = /^\d\d\d\d$/.test(date)
    ? date
    : moment(date).format('YYYY');
  const year = formattedYear === 'Invalid date' ? date : formattedYear;
  const renderedYear = lastYear !== year || reset ? year : '';
  if (lastYear !== year || reset) {
    lastYear = year;
  }

  return (
    <Row>
      <DateCell>{renderedYear}</DateCell>
      <div>{children}</div>
    </Row>
  );
}

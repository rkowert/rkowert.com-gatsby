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
  flex-flow: row wrap;
  margin-bottom: ${rhythm(1)};

  @media (min-width: 64em) {
    flex-wrap: nowrap;
  }
`;

const DateCell = styled.div`
  font-weight: bold;
  margin-bottom: ${rhythm(1 / 2)};
  min-width: 100%;

  @media (min-width: 64em) {
    font-weight: normal;
    margin-bottom: 0;
    min-width: 7rem;
  }
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

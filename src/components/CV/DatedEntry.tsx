import React from 'react';

interface Props {
  children: React.ReactNode;
  date: string;
}

let lastDate = '';

export default function DatedEntry({ children, date }: Props) {
  let renderDate = false;
  if (lastDate !== date) {
    lastDate = date;
    renderDate = true;
  }
  return (
    <div>
      <div>{renderDate ? date : null}</div>
      <div>{children}</div>
    </div>
  );
}

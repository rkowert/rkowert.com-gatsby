import React from 'react';
import { Link } from 'gatsby';
import {
  IntegratedFiltering,
  IntegratedSorting,
  RowDetailState,
  SearchState,
  SortingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  SearchPanel,
  TableHeaderRow,
  TableRowDetail,
  Toolbar,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import styled from 'styled-components';

import { Layout, SEO } from 'components';
import type { GamesResearchRow, GamesResearchPositionRow } from 'types';
import { useGamesResearchSheet } from 'utils/hooks';

const SHEET_KEY = '1eEfAlQIc2H3eesYjiEOiOddKZ3KPRIl-zMHAZFV-abo';

const formatData = (data: string) => {
  return /^\?$/.test(data) || data.trim().length === 0 ? (
    <em>unknown</em>
  ) : (
    data
  );
};

const RowDetailCellHeader = styled.th`
  border-bottom: 0;
  font-size: 0.8125rem;
  text-align: right;
  width: 13em;
`;

const RowDetailCell = styled.td`
  font-size: 0.8125rem;
`;

const RowDetail = ({ row }) => (
  <table>
    <tbody>
      <tr>
        <RowDetailCellHeader>Research Group / Lab:</RowDetailCellHeader>
        <RowDetailCell>{formatData(row.group)}</RowDetailCell>
      </tr>
      <tr>
        <RowDetailCellHeader>Focus / Specialization:</RowDetailCellHeader>
        <RowDetailCell>{formatData(row.focus)}</RowDetailCell>
      </tr>
      <tr>
        <RowDetailCellHeader>Contact Person:</RowDetailCellHeader>
        <RowDetailCell>{formatData(row.contact)}</RowDetailCell>
      </tr>
      <tr>
        <RowDetailCellHeader>Link:</RowDetailCellHeader>
        <RowDetailCell>
          {row.link ? (
            <a href={row.link} target="_blank">
              {row.link}
            </a>
          ) : (
            formatData('?')
          )}
        </RowDetailCell>
      </tr>
    </tbody>
  </table>
);

export default function GamesResearchPositions() {
  const gridMarkup = useGamesResearchSheet<
    GamesResearchRow<GamesResearchPositionRow>
  >({
    sheetKey: SHEET_KEY,
    mapper: (row: string[]): GamesResearchPositionRow => ({
      continent: row[0] || '',
      country: row[1] || '',
      university: row[2] || '',
      department: row[3] || '',
      program: row[5] || '',
      group: row[4] || '',
      contact: row[6] || '',
      link: row[7] || '',
      focus: row[8] || '',
    }),
    renderGrid: (rows) => (
      <Grid
        rows={rows}
        columns={[
          { name: 'continent', title: 'Continent' },
          { name: 'country', title: 'Country' },
          {
            name: 'university',
            title: 'University/Research Center/Network',
            getCellValue: (row) => formatData(row.university),
          },
          {
            name: 'department',
            title: 'Department/Faculty/School',
            getCellValue: (row) => formatData(row.department),
          },
          {
            name: 'program',
            title: 'Degree Program(s)',
            getCellValue: (row) => formatData(row.program),
          },
        ]}
      >
        <SearchState />
        <IntegratedFiltering />
        <SortingState
          defaultSorting={[{ columnName: 'continent', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <RowDetailState />
        <VirtualTable />
        <TableHeaderRow showSortingControls />
        <TableRowDetail contentComponent={RowDetail} />
        <Toolbar />
        <SearchPanel />
      </Grid>
    ),
  });

  return (
    <Layout>
      <SEO title="Games Research Positions" />
      <main>
        <h1>Games Research Positions</h1>
        <p>
          The{' '}
          <a href="http://www.digarec.org/gamesresearchmap/doku.php?id=start:gamesresearchmap">
            original content of this table
          </a>{' '}
          comes from the{' '}
          <a href="http://www.digarec.org/">Digital Games Research Center</a>.
          We found the original table to be rather unwieldly, so to improve
          accessibility (and usability), we re-deployed the information here. If
          you would like to submit a new position or any corrections to existing
          info in the table, please <Link to="/contact">contact me</Link>.
        </p>
        <p>
          Click several columns while holding <kbd>Shift</kbd> to sort data by
          these columns. Clicking a column while holding <kbd>Ctrl</kbd> (
          <kbd>Cmd</kbd> for MacOS) cancels sorting by this column.
        </p>
        {gridMarkup}
      </main>
    </Layout>
  );
}

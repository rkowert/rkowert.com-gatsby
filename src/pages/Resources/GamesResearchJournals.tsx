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
  ColumnChooser,
  Grid,
  SearchPanel,
  TableColumnVisibility,
  TableHeaderRow,
  TableRowDetail,
  Toolbar,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import styled from 'styled-components';

import { Layout, SEO } from 'components';
import type { GamesResearchJournalRow, GamesResearchRow } from 'types';
import { useGamesResearchSheet } from 'utils/hooks';

const SHEET_KEY = '1sNdqBAtiJXFPqSwGax41Al0fhk3O_hJEB3_jMCkTLjw';

const formatData = (data: string, format?: string) => {
  if (format === 'url') {
    if (data && !/^\?$/.test(data)) {
      return (
        <a href={data} target="_blank">
          {data}
        </a>
      );
    }
  }

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
`;

const RowDetailCell = styled.td`
  font-size: 0.8125rem;
`;

const RowDetail = ({ row }) => (
  <table>
    <tbody>
      <tr>
        <RowDetailCellHeader>Submission Guidelines:</RowDetailCellHeader>
        <RowDetailCell>
          {formatData(row.submissionGuidelinesUrl, 'url')}
        </RowDetailCell>
        <RowDetailCellHeader>Word Limit (brief limit):</RowDetailCellHeader>
        <RowDetailCell>
          {formatData(row.wordLimit)} ({formatData(row.briefWordLimit)})
        </RowDetailCell>
      </tr>
      <tr>
        <RowDetailCellHeader>Journal Reviewer Profile:</RowDetailCellHeader>
        <RowDetailCell>
          {formatData(row.journalReviewerUrl, 'url')}
        </RowDetailCell>
        <RowDetailCellHeader />
        <RowDetailCell />
      </tr>
    </tbody>
  </table>
);

export default function GamesResearchJournals() {
  const gridMarkup = useGamesResearchSheet<
    GamesResearchRow<GamesResearchJournalRow>
  >({
    sheetKey: SHEET_KEY,
    mapper: (row: string[]): GamesResearchJournalRow => ({
      title: row[0] || '',
      url: row[1] || '',
      discipline: row[2] || '',
      publisher: row[6] || '',
      publisherUrl: row[7] || '',
      frequency: row[8] || '',
      issn: row[12] || '',
      eissn: row[13] || '',
      h5Index: row[3] || '',
      h5Median: row[4] || '',
      impactFactor: row[5] || '',
      wordLimit: row[10] || '',
      briefWordLimit: row[11] || '',
      journalReviewerUrl: row[9] || '',
      submissionGuidelinesUrl: row[14] || '',
    }),
    renderGrid: (rows) => (
      <Grid
        rows={rows}
        columns={[
          {
            name: 'title',
            title: 'Journal',
            getCellValue: (row) =>
              row.url ? <a href={row.url}>{row.title}</a> : row.title,
          },
          { name: 'discipline', title: 'Discipline' },
          {
            name: 'publisher',
            title: 'Publisher',
            getCellValue: (row) =>
              row.publisherUrl ? (
                <a href={row.publisherUrl}>{row.publisher}</a>
              ) : (
                row.publisher
              ),
          },
          {
            name: 'frequency',
            title: 'Frequency (pubs/yr)',
            getCellValue: (row) => formatData(row.frequency),
          },
          {
            name: 'issn',
            title: 'ISSN',
            getCellValue: (row) => formatData(row.issn),
          },
          {
            name: 'eissn',
            title: 'eISSN',
            getCellValue: (row) => formatData(row.eissn),
          },
          {
            name: 'h5Index',
            title: 'H5 Index',
            getCellValue: (row) => formatData(row.h5Index),
          },
          {
            name: 'h5Median',
            title: 'H5 Median',
            getCellValue: (row) => formatData(row.h5Median),
          },
          {
            name: 'impactFactor',
            title: 'Impact Factor',
            getCellValue: (row) => formatData(row.impactFactor),
          },
        ]}
      >
        <SearchState />
        <IntegratedFiltering />
        <SortingState
          defaultSorting={[{ columnName: 'title', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <RowDetailState />
        <VirtualTable />
        <TableHeaderRow showSortingControls />
        <TableColumnVisibility defaultHiddenColumnNames={['issn', 'eissn']} />
        <TableRowDetail contentComponent={RowDetail} />
        <Toolbar />
        <ColumnChooser />
        <SearchPanel />
      </Grid>
    ),
  });

  return (
    <Layout>
      <SEO
        title="Games Research Journals"
        keywords={['games research', 'gaming research']}
      />
      <main>
        <h1>Games Research Journals</h1>
        <p>
          The following table contains a comprehensive listing of academic
          journals and publications known to publish research related to digital
          games. If you would like to suggest a new journal or any corrections
          to existing info in the table please{' '}
          <Link to="/contact">contact me</Link>.
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

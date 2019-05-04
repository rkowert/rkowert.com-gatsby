import React from 'react';
import { Link } from 'gatsby';
import Linkify from 'linkifyjs/react';
import {
  IntegratedFiltering,
  IntegratedSorting,
  SearchState,
  SortingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  SearchPanel,
  TableHeaderRow,
  Toolbar,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';

import { Layout, SEO } from 'components';
import { GamesResearchRow } from 'types';
import { useGamesResearchSheet } from 'utils/hooks';

const SHEET_KEY = '12KRZjgy8EMICH4RFsEVMYIrnlupeJt1aCEfkIqDEi7U';

interface GamesResearchTwitterRow {
  name: string;
  twitterHandle: string;
  affiliations: string;
  website: string;
  notes: string;
}

export default function GamesResearchTwitter() {
  const gridMarkup = useGamesResearchSheet<
    GamesResearchRow<GamesResearchTwitterRow>
  >({
    sheetKey: SHEET_KEY,
    mapper: (row: string[]): GamesResearchTwitterRow => ({
      name: row[0] || '',
      twitterHandle: row[1] || '',
      affiliations: row[2] || '',
      website: row[3] || '',
      notes: row[4] || '',
    }),
    renderGrid: rows => (
      <Grid
        rows={rows}
        columns={[
          { name: 'name', title: 'Name' },
          {
            name: 'twitterHandle',
            title: 'Twitter Handle',
            getCellValue: row => (
              <a href={`http://twitter.com/${row.twitterHandle}`}>
                {row.twitterHandle}
              </a>
            ),
          },
          {
            name: 'affiliations',
            title: 'Affiliation(s)',
          },
          {
            name: 'website',
            title: 'Website',
            getCellValue: row => <Linkify>{row.website}</Linkify>,
          },
          {
            name: 'notes',
            title: 'Notes',
          },
        ]}
      >
        <SearchState />
        <IntegratedFiltering />
        <SortingState
          defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <VirtualTable
          columnExtensions={[{ columnName: 'notes', wordWrapEnabled: true }]}
        />
        <TableHeaderRow showSortingControls />
        <Toolbar />
        <SearchPanel />
      </Grid>
    ),
  });

  return (
    <Layout>
      <SEO title="Games Researchers on Twitter" />
      <main>
        <h1>Games Researchers on Twitter</h1>
        <p>
          The following table provides a listing of people on Twitter who write
          about, talk about, or study the overlap between video games and
          academic fields like psychology, communications, economics, sociology,
          etc. The data in this table is pulled from an open, crowd-sourced
          Google doc created by{' '}
          <a href="http://www.psychologyofgames.com">Jamie Madigan</a>. If you
          would like to be added to the list, please{' '}
          <Link to="/contact">contact me</Link> with your details (full name,
          twitter handle, affiliation, and research interests).
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

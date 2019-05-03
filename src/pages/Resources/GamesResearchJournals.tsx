import React, { useEffect, useMemo, useState } from 'react';
import {Link} from 'gatsby';
import Paper from '@material-ui/core/Paper';
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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { Layout, SEO } from 'components';

const SHEET_KEY = '1sNdqBAtiJXFPqSwGax41Al0fhk3O_hJEB3_jMCkTLjw';
const API_KEY = 'AIzaSyBiaP9kmdGAWtzVnRw8zFsObqMcz2yP83A';
const JSON_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_KEY}/values/Sheet1?key=${API_KEY}`;

interface Row {
  title: string;
  url: string;
  discipline: string;
  publisher: string;
  publisherUrl: string;
  frequency: string;
  issn: string;
  eissn: string;
  h5Index: string;
  h5Median: string;
  impactFactor: string;
  wordLimit: string;
  briefWordLimit: string;
  journalReviewerUrl: string;
  submissionGuidelinesUrl: string;
}

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
  const darkMode = useDarkMode();
  const [rows, setRows] = useState<Row[]>(null);

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode.value ? 'dark' : 'light',
        },
        typography: {
          useNextVariants: true,
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    // if (!window.fetch) {...}
    fetch(JSON_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(responseJson => {
        console.log(JSON.stringify(responseJson));
        if (!responseJson.values) {
          throw new Error('Network response was missing values.');
        }

        // Skip the heder row
        const rows: Row[] = responseJson.values.slice(1).map(
          (row: string[]): Row => ({
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
          })
        );
        setRows(rows);
      })
      .catch(error => console.error(error));
  }, []);

  const gridMarkup = rows ? (
    <MuiThemeProvider theme={muiTheme}>
    <Paper>
      <Grid
        rows={rows}
        columns={[
          {
            name: 'title',
            title: 'Journal',
            getCellValue: row =>
              row.url ? <a href={row.url}>{row.title}</a> : row.title,
          },
          { name: 'discipline', title: 'Discipline' },
          {
            name: 'publisher',
            title: 'Publisher',
            getCellValue: row =>
              row.publisherUrl ? (
                <a href={row.publisherUrl}>{row.publisher}</a>
              ) : (
                row.publisher
              ),
          },
          {
            name: 'frequency',
            title: 'Frequency (pubs/yr)',
            getCellValue: row => formatData(row.frequency),
          },
          {
            name: 'issn',
            title: 'ISSN',
            getCellValue: row => formatData(row.issn),
          },
          {
            name: 'eissn',
            title: 'eISSN',
            getCellValue: row => formatData(row.eissn),
          },
          {
            name: 'h5Index',
            title: 'H5 Index',
            getCellValue: row => formatData(row.h5Index),
          },
          {
            name: 'h5Median',
            title: 'H5 Median',
            getCellValue: row => formatData(row.h5Median),
          },
          {
            name: 'impactFactor',
            title: 'Impact Factor',
            getCellValue: row => formatData(row.impactFactor),
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
      </Paper>
    </MuiThemeProvider>
  ) : null;

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
          to existing info in the table please <Link to="/contact">contact me</Link>.
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

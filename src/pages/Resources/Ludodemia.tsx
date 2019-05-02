import React, { useEffect, useMemo, useState } from 'react';
import {
  GroupingState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  SearchState,
  SortingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  PagingPanel,
  SearchPanel,
  TableHeaderRow,
  TableGroupRow,
  Toolbar,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styled, { createGlobalStyle } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { Layout, SEO } from 'components';
import { rhythm } from 'utils/typography';
import useScript from 'utils/hooks';

const SHEET_KEY = '1vJgmbqVGJNzys5Eqe4Ub-oK9mGSLQBqRNjjBVUOCzt0';
const API_KEY = 'AIzaSyBiaP9kmdGAWtzVnRw8zFsObqMcz2yP83A';
const JSON_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_KEY}/values/Sheet1?key=${API_KEY}`;

interface Row {
  category: string;
  subCategory: string;
  format: string;
  year: string;
  authors: string;
  title: string;
  publisher: string;
  link: string;
  doi: string;
  isbn10: string;
  isbn13: string;
  pubmed: string;
  abstract: string;
}

export default function Ludodemia() {
  const darkMode = useDarkMode();
  const [rows, setRows] = useState<Row[]>(null);
  // const [altMetricsLoaded, altMetricsError] = useScript(
  //   'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'
  // );

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

        // Skip the header rows
        const rows: Row[] = responseJson.values.slice(3).map(
          (row: string[]): Row => ({
            category: row[0] || '',
            subCategory: row[1] || '',
            format: row[2] || '',
            year: row[3] || '',
            authors: row[4] || '',
            title: row[5] || '',
            publisher: row[6] || '',
            link: row[7] || '',
            doi: row[8] || '',
            isbn10: row[9] || '',
            isbn13: row[10] || '',
            pubmed: row[11] || '',
            abstract: row[12] || '',
          })
        );
        setRows(rows);
      })
      .catch(error => console.error(error));
  }, []);

  const gridMarkup = rows ? (
    <MuiThemeProvider theme={muiTheme}>
      <Grid
        rows={rows}
        columns={[
          { name: 'category', title: 'Category' },
          { name: 'subCategory', title: 'Sub-category' },
          { name: 'format', title: 'Format' },
          { name: 'year', title: 'Year' },
          { name: 'authors', title: 'Author(s)' },
          {
            name: 'title',
            title: 'Title',
            getCellValue: row =>
              row.link ? <a href={row.link}>{row.title}</a> : row.title,
          },
          { name: 'publisher', title: 'Publisher' },
          // {
          //   name: 'altmetrics',
          //   title: 'Altmetrics',
          //   getCellValue: row => (
          //     <div
          //       className="altmetric-embed"
          //       data-badge-type="1"
          //       data-badge-popover="bottom"
          //       data-doi={row.doi}
          //       data-isbn={row.isbn13 || row.isbn10}
          //       data-pmid={row.pubmed}
          //     />
          //   ),
          // },
        ]}
      >
        <SearchState />
        <IntegratedFiltering />
        <SortingState />
        <GroupingState
          columnGroupingEnabled={false}
          grouping={[{ columnName: 'category' }, { columnName: 'subCategory' }]}
        />
        <IntegratedSorting />
        <IntegratedGrouping />
        <VirtualTable />
        <TableHeaderRow showSortingControls />
        <TableGroupRow />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </MuiThemeProvider>
  ) : null;

  return (
    <Layout>
      <SEO
        title="Ludodemia"
        keywords={['rachel', 'kowert', 'psychology', 'gaming']}
      />
      <main>
        <h1>Ludodemia</h1>
        <p>
          The base content of this table comes from{' '}
          <a href="http://ludodemia.pbworks.com/w/page/67607594/Welcome%20to%20Ludodemia">
            Ludodemia
          </a>{' '}
          hosted by the <a href="http://www.wellcome.ac.uk/">Wellcome Trust</a>.
          We have reformatted the information here in the hopes to improve its
          accessibility and usability. If you would like to submit a request for
          a new entry (research paper or new suggestions for
          headings/subheadings) or corrections to the exiting table, please do
          so <a href="http://goo.gl/forms/pqXvJKcf5hZ8QQ7v1">here</a>.
        </p>
        {/* <p>
          Altmetric data and badges are courtesy of{' '}
          <a href="http://www.altmetric.com/">Altmetric.com</a>.
        </p> */}
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

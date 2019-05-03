import React, { useEffect, useMemo, useState } from 'react';
import {Link} from 'gatsby';
import Linkify from 'linkifyjs/react';
import Paper from '@material-ui/core/Paper';
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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { Layout, SEO } from 'components';

const SHEET_KEY = '12KRZjgy8EMICH4RFsEVMYIrnlupeJt1aCEfkIqDEi7U';
const API_KEY = 'AIzaSyBiaP9kmdGAWtzVnRw8zFsObqMcz2yP83A';
const JSON_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_KEY}/values/Sheet1?key=${API_KEY}`;

interface Row {
  name: string;
  twitterHandle: string;
  affiliations: string;
  website: string;
  notes: string;
}

const RowDetail = ({ row }) => <div>{row.notes}</div>;

export default function GamesResearchTwitter() {
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
            name: row[0] || '',
            twitterHandle: row[1] || '',
            affiliations: row[2] || '',
            website: row[3] || '',
            notes: row[4] || '',
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
        {/* <RowDetailState /> */}
        <VirtualTable columnExtensions={[
          { columnName: 'notes', wordWrapEnabled: true },
        ]} />
        <TableHeaderRow showSortingControls />
        {/* <TableRowDetail contentComponent={RowDetail} /> */}
        <Toolbar />
        <SearchPanel />
      </Grid>
      </Paper>
    </MuiThemeProvider>
  ) : null;

  return (
    <Layout>
      <SEO title="Games Researchers on Twitter" />
      <main>
        <h1>Games Researchers on Twitter</h1>
        <p>The following table provides a listing of people on Twitter who write about, talk about, or study the overlap between video games and academic fields like psychology, communications, economics, sociology, etc. The data in this table is pulled from an open, crowd-sourced Google doc created by <a href="http://www.psychologyofgames.com">Jamie Madigan</a>. If you would like to be added to the list, please <Link to="/contact">contact me</Link> with your details (full name, twitter handle, affiliation, and research interests).</p>
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

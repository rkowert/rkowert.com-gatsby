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

const SHEET_KEY = '1eEfAlQIc2H3eesYjiEOiOddKZ3KPRIl-zMHAZFV-abo';
const API_KEY = 'AIzaSyBiaP9kmdGAWtzVnRw8zFsObqMcz2yP83A';
const JSON_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_KEY}/values/Sheet1?key=${API_KEY}`;

interface Row {
  continent: string;
  country: string;
  university: string;
  department: string;
  program: string;
  group: string;
  contact: string;
  link: string;
  focus: string;
}

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
            continent: row[0] || '',
            country: row[1] || '',
            university: row[2] || '',
            department: row[3] || '',
            program: row[5] || '',
            group: row[4] || '',
            contact: row[6] || '',
            link: row[7] || '',
            focus: row[8] || '',
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
          { name: 'continent', title: 'Continent' },
          { name: 'country', title: 'Country' },
          {
            name: 'university',
            title: 'University/Research Center/Network',
            getCellValue: row => formatData(row.university),
          },
          {
            name: 'department',
            title: 'Department/Faculty/School',
            getCellValue: row => formatData(row.department),
          },
          {
            name: 'program',
            title: 'Degree Program(s)',
            getCellValue: row => formatData(row.program),
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
      </Paper>
    </MuiThemeProvider>
  ) : null;

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

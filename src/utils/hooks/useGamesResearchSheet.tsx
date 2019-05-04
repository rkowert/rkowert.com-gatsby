import React, { useEffect, useMemo, useState, ReactNode } from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { default as MuiCircularProgress } from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { GamesResearchRow } from 'types';

interface Row {
  [key: string]: string;
}

interface Props {
  headerRows?: number;
  mapper: (row: string[]) => GamesResearchRow<any>;
  renderGrid: (rows: GamesResearchRow<any>[]) => ReactNode;
  sheetKey: string;
}

const API_KEY = 'AIzaSyBiaP9kmdGAWtzVnRw8zFsObqMcz2yP83A';

const CircularProgress = styled(MuiCircularProgress)`
  margin: 0 auto;
`;

export default function useGamesResearchSheet<RowType extends Row>({
  headerRows = 1,
  mapper,
  renderGrid,
  sheetKey,
}: Props) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetKey}/values/Sheet1?key=${API_KEY}`;
  const [rows, setRows] = useState<RowType[]>(null);
  const darkMode = useDarkMode();
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
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(responseJson => {
        if (!responseJson.values) {
          throw new Error('Network response was missing values.');
        }
        setRows(responseJson.values.slice(headerRows).map(mapper));
      })
      .catch(error => console.error(error));
  }, []);

  const gridMarkup = (
    <div aria-busy={Boolean(rows)} aria-describedby="#GridLoadingIndicator">
      {rows ? (
        <MuiThemeProvider theme={muiTheme}>
          <Paper>{renderGrid(rows)}</Paper>
        </MuiThemeProvider>
      ) : (
        <CircularProgress
          id="GridLoadingIndicator"
          style={{ display: 'block' }}
        />
      )}
    </div>
  );

  return gridMarkup;
}

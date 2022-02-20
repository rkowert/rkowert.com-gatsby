import React, { useEffect, useMemo, useState, ReactNode } from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import MuiCircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

import type {
  GamesResearchArticleRow,
  GamesResearchRow,
  GamesResearchJournalRow,
  GamesResearchTwitterRow,
} from 'types';

interface Row {
  [key: string]: string;
}

type GamesResearchRowType =
  | GamesResearchJournalRow
  | GamesResearchTwitterRow
  | GamesResearchArticleRow;

interface Props {
  headerRows?: number;
  mapper: (row: string[]) => GamesResearchRow<GamesResearchRowType>;
  renderGrid: (rows: GamesResearchRow<GamesResearchRowType>[]) => ReactNode;
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
      createTheme({
        palette: {
          type: darkMode.value ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((responseJson) => {
        if (!responseJson.values) {
          throw new Error('Network response was missing values.');
        }
        setRows(responseJson.values.slice(headerRows).map(mapper));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
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

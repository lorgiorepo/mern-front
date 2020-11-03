import React from 'react';
import {ThemeProvider} from '@material-ui/core';

import Counter from '../Counter';
import Random from '../Random';
import ArtistForm from '../ArtistForm';
import ArtistList from '../ArtistList';
import classes from './App.module.css';
import theme from '../../theme';
import GlobalStyles from './GlobalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ArtistForm />
    <ArtistList />
  </ThemeProvider>
);

export default App;

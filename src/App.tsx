import React from 'react';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/themes/defaultTheme';

import GlobalStyle from './styles/global';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;

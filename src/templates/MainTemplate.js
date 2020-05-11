import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Header from 'components/organisms/Header/Header';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  </div>
);

export default MainTemplate;

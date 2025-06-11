import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './constants/stylesGlobal/theme';
import AppRoutes from './routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

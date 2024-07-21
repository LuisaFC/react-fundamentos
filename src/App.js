import React, { useState, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';
import themes from './styles/themes'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);
  
  function handletoggleTheme() {
    setTheme(prevState =>  prevState == 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handletoggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
};

export default App;
import { HashRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Body from './screens/Body';
import ParticleWrapper from './screens/ParticleWrapper/ParticleWrapper';
import './styles.css';
import { PerformanceContext } from './Contexts';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      <PerformanceContext.Provider
        value={{ isLowPerformance, setIsLowPerformance }}
      >
        {!isLowPerformance && <ParticleWrapper />}
        <CssBaseline />
        <Toaster />
        <HashRouter>
          <Body></Body>
        </HashRouter>
      </PerformanceContext.Provider>
    </ThemeProvider>
  );
};

export default App;

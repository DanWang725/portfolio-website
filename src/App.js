import { Navbar } from './navbar/Navbar';
import { AppRoutes } from './Routes';
import { HashRouter } from 'react-router-dom';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Body from './screens/Body';
import { loadFull } from 'tsparticles';
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Particles from 'react-particles';
import { scroll } from 'scroll-speed';
import ParticleWrapper from './screens/ParticleWrapper/ParticleWrapper';
import './styles.css';
import { PerformanceContext } from './Contexts';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
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
        <HashRouter>
          <Body></Body>
        </HashRouter>
      </PerformanceContext.Provider>
    </ThemeProvider>
  );
};

export default App;

import { CssBaseline, ThemeProvider } from '@mui/material';
import PerformanceProvider from './contexts/PerformanceProvider';
import { darkTheme } from './theme';
import { HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import StylingProvider from './contexts/StylingProvider';
import { ReactNode } from 'react';

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter>
        <PerformanceProvider>
          <StylingProvider>
            <CssBaseline />
            <Toaster />
            {children}
          </StylingProvider>
        </PerformanceProvider>
      </HashRouter>
    </ThemeProvider>
  );
};
export default Providers;

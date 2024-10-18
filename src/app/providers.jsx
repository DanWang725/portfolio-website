import { CssBaseline, ThemeProvider } from '@mui/material';
import PerformanceProvider from './contexts/PerformanceProvider';
import { darkTheme } from './theme';
import { HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter>
        <PerformanceProvider>
          <CssBaseline />
          <Toaster />
          {children}
        </PerformanceProvider>
      </HashRouter>
    </ThemeProvider>
  );
};
export default Providers;

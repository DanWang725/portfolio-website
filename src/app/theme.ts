import { createTheme, Theme, ThemeOptions } from '@mui/material';

const newTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
};

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

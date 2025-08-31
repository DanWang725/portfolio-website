import { Theme } from '@emotion/react';
import { Typography } from '@mui/material';

export interface ContentTextProps {
  children: React.ReactNode;
  styleOverrides?: Theme;
}

const ContentText: React.FC<ContentTextProps> = ({
  children,
  styleOverrides = {},
}) => {
  return (
    <Typography variant="h6" ml="1rem" sx={{ ...styleOverrides }}>
      {children}
    </Typography>
  );
};

export default ContentText;

import { Theme } from '@emotion/react';
import { Box, ThemeOptions } from '@mui/material';
import { ReactNode } from 'react';

export interface ContentSectionProps {
  children: ReactNode;
  styleOverrides?: Theme;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  styleOverrides,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        borderWidth: '2px',
        borderColor: 'cyan',
        borderStyle: 'solid',
        ...styleOverrides,
      }}
    >
      {children}
    </Box>
  );
};
export default ContentSection;

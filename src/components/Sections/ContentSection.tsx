import { Theme } from '@emotion/react';
import { Box, ThemeOptions } from '@mui/material';
import { ReactNode } from 'react';

export interface ContentSectionProps {
  /** The content to be displayed in the section */
  children: ReactNode;
  /** Any styles to be applied to the content section box */
  styleOverrides?: Theme;
}

/**
 * A styled box used to contain article content for the website
 * Has a grey background and a cyan border
 */
const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  styleOverrides,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        borderRadius: '2px',
        borderWidth: '1px',
        borderColor: 'rgba(0, 255, 255, 0.7 )',
        borderStyle: 'solid',
        ...styleOverrides,
      }}
    >
      {children}
    </Box>
  );
};
export default ContentSection;

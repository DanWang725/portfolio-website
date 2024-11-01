import { Box } from '@mui/material';
import { ReactNode } from 'react';

export interface ContentSectionProps {
  children: ReactNode;
}
const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        borderWidth: '2px',
        borderColor: 'cyan',
        borderStyle: 'solid',
        minWidth: '95%',
        width: '90%',
        height: 'auto',
        padding: '1rem',
      }}
    >
      {children}
    </Box>
  );
};
export default ContentSection;

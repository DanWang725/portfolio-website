import { Box, Divider, Typography } from '@mui/material';
export interface ContentHeaderProps {
  children: React.ReactNode;
}
const ContentHeader: React.FC<ContentHeaderProps> = ({ children }) => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: '2rem' }}>
      <Typography variant="h2" sx={{ textAlign: 'start' }}>
        {children}
      </Typography>
      <Divider />
    </Box>
  );
};
export default ContentHeader;

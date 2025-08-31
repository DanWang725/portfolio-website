import ContentSection from '@components/Sections/ContentSection';
import { Box, LinearProgress } from '@mui/material';

const Loading: React.FC = () => {
  return (
    <ContentSection>
      <LinearProgress />
      <Box sx={{ paddingY: '10rem' }} />
    </ContentSection>
  );
};
export default Loading;

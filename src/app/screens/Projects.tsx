import ContentHeader from '@components/Sections/ContentHeader';
import ContentSection from '@components/Sections/ContentSection';
import ContentText from '@components/Sections/ContentText';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ContentSection styleOverrides={{ p: '1rem' }}>
      <ContentHeader>Projects</ContentHeader>
      <ContentText>
        Over the years I have created many wonderful and cool applications,
        large and small. Over time, I plan to add these to here. Some of these
        are written directly into the website!
      </ContentText>
      <Box>
        <Button onClick={() => navigate('./risk-calculator')}>
          Risk Battles
        </Button>
        <Button onClick={() => navigate('./countdown')}>
          New Years Countdown
        </Button>
        <Button onClick={() => navigate('./funny')}>Random Silence</Button>
      </Box>
    </ContentSection>
  );
};
export default Projects;

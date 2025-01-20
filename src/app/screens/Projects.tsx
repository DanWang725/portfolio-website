import ContentHeader from '@components/Sections/ContentHeader';
import ContentSection from '@components/Sections/ContentSection';
import ContentText from '@components/Sections/ContentText';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ContentSection>
      <ContentHeader>Projects</ContentHeader>
      <ContentText>Some stuf fI made</ContentText>
      <Box>
        <Button onClick={() => navigate('/proj/risk')}></Button>
      </Box>
    </ContentSection>
  );
};
export default Projects;

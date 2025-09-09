import { Link, useNavigate } from 'react-router-dom';
import { scrollToHash } from '../../utils/RouteHashUtils';
import ContentSection from '../../components/Sections/ContentSection';
import {
  Box,
  Button,
  colors,
  Divider,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import ArticleEntryList from '../../components/Article/ArticleEntryList';
import { articleContent } from './utils';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box height="100vh">
        <ContentSection
          styleOverrides={{ mt: '30vh', width: 'fit-content', p: '1rem' }}
        >
          <Typography variant="h2">{"I'm Daniel Wang"}</Typography>
          <Typography variant="h5">
            {
              "Hello! I'm a computer science student currently in his third year studying at University of Geulph. I am open to any oppertunities. Looking to chat? You can find my contact information below. I am always up for a challenge."
            }
          </Typography>
          <Divider style={{ margin: '1rem' }} />
          <Typography variant="h6" align="center">
            Scroll down or navigate to these areas
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Button onClick={() => scrollToHash('about')}>
              <Link
                to="#about"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                About
              </Link>
            </Button>
            <Button onClick={() => navigate('/work-term-report')}>
              <Link
                to="/work-term-report"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Work Term Reports
              </Link>
            </Button>
          </Stack>
        </ContentSection>
      </Box>
      <ContentSection
        styleOverrides={{ display: 'flex', flexDirection: 'column', p: '1rem' }}
      >
        <ArticleEntryList entries={articleContent} />
      </ContentSection>
    </>
  );
};
export default Homepage;

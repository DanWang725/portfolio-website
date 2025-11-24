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
          <Typography variant="h2">{"Hello, I'm Daniel Wang"}</Typography>
          <Typography variant="h5">
            {
              "I'm a 5th year undergraduate computer science student at the University of Guelph. Experienced in industry front end development as well as academic experience in training and evaluating generative ML models. I also like to do game development, as well as code hobby projects on this website."
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

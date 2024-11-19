import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { scrollToHash } from '../../shared-utils/RouteHashUtils';
import { StylingContext } from '../contexts/StylingProvider';
import ContentSection from '../../components/Sections/ContentSection';
import { Box, Typography } from '@mui/material';

const Homepage: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const { setNavbarClassOverrides } = useContext(StylingContext);
  useEffect(() => {
    setNavbarClassOverrides(
      inView ? 'navbar-hidden' : 'navbar-hidden navbar-show',
    );
    return () => setNavbarClassOverrides('');
  }, [inView, setNavbarClassOverrides]);

  return (
    <>
      <Box height="100vh">
        <ContentSection styleOverrides={{ mt: '30vh', width: 'fit-content' }}>
          <Typography variant="h1">{"I'm Daniel Wang"}</Typography>
          <Typography variant="h4">
            {
              "Hello! I'm a computer science student currently in his third year studying at University of Geulph. I am open to any oppertunities. Looking to chat? You can find my contact information below. I am always up for a challenge."
            }
          </Typography>
          <Typography variant="h6">
            Scroll down or navigate to these areas
          </Typography>

          <div className="title-nav-items">
            <li>
              <Link
                to={'#about'}
                className="title-links"
                onClick={() => scrollToHash('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={'/work-term-report'}
                className="title-links"
                onClick={() => scrollToHash('about')}
              >
                Work Term Reports
              </Link>
            </li>
          </div>
        </ContentSection>
      </Box>
      <div className="content-section">
        <div id="home"></div>
        <section className="std-container name-page" ref={ref}>
          <h1>{"I'm Daniel Wang"}</h1>
          <h2 className="name-page-about">
            {
              "Hello! I'm a computer science student currently in his third year studying at University of Geulph. I am open to any oppertunities. Looking to chat? You can find my contact information below. I am always up for a challenge."
            }
          </h2>
          <h3 className="name-page-navigation">
            Scroll down or navigate to these areas
          </h3>
          <div className="title-nav-items">
            <li>
              <Link
                to={'#about'}
                className="title-links"
                onClick={() => scrollToHash('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={'/work-term-report'}
                className="title-links"
                onClick={() => scrollToHash('about')}
              >
                Work Term Reports
              </Link>
            </li>
          </div>
          <></>
        </section>
      </div>
    </>
  );
};
export default Homepage;

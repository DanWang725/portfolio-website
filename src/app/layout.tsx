import { ReactNode, Suspense, useContext } from 'react';
import { PerformanceContext } from './contexts/PerformanceProvider';
import ParticleWrapper from '../features/ParticleBackground/ParticleWrapper';
import { Navbar } from './navbar/Navbar';
import { Container } from '@mui/material';
import Loading from './screens/Loading';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLowPerformance } = useContext(PerformanceContext);
  return (
    <>
      {!isLowPerformance && <ParticleWrapper />}
      <Navbar />
      <Container sx={{ mt: '80px' }}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Container>
    </>
  );
};
export default Layout;

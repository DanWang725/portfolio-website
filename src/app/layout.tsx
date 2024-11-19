import { ReactNode, useContext } from 'react';
import PerformanceProvider, {
  PerformanceContext,
} from './contexts/PerformanceProvider';
import ParticleWrapper from '../features/ParticleBackground/ParticleWrapper';
import { Navbar } from './navbar/Navbar';
import { Container } from '@mui/material';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLowPerformance } = useContext(PerformanceContext);
  return (
    <>
      {!isLowPerformance && <ParticleWrapper />}
      <Navbar />
      <Container sx={{ mt: '80px' }}>{children}</Container>
    </>
  );
};
export default Layout;

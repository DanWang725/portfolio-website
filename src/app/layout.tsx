import { ReactNode, useContext } from 'react';
import PerformanceProvider, {
  PerformanceContext,
} from './contexts/PerformanceProvider';
import ParticleWrapper from '../features/ParticleBackground/ParticleWrapper';
import { Navbar } from './navbar/Navbar';
import { Container } from '@mui/material';
import FPSStats from 'react-fps-stats';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLowPerformance, isDebugMode } = useContext(PerformanceContext);
  return (
    <>
      {!isLowPerformance && <ParticleWrapper />}
      <Navbar />
      <Container sx={{ mt: '80px' }}>{children}</Container>
      {isDebugMode && <FPSStats />}
    </>
  );
};
export default Layout;

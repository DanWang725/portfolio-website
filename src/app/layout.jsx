import { useContext } from 'react';
import PerformanceProvider, {
  PerformanceContext,
} from './contexts/PerformanceProvider';
import ParticleWrapper from '../screens/ParticleWrapper/ParticleWrapper';

const Layout = ({ children }) => {
  const { isLowPerformance } = useContext(PerformanceContext);
  return (
    <>
      {!isLowPerformance && <ParticleWrapper />}
      <div className="layout">
        <div className="content-section">
          <div className="std-container content-background">
            <div className="Body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;

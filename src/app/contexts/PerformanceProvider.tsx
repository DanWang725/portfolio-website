import { useState } from 'react';

import { createContext } from 'react';
import { PerformanceProviderValues } from '../../types/Contexts';

export const PerformanceContext = createContext({
  isDebugMode: false,
  setIsDebugMode: () => {},
  isLowPerformance: false,
  setIsLowPerformance: () => {},
} as PerformanceProviderValues);

import { ReactNode } from 'react';

const PerformanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isDebugMode, setIsDebugMode] = useState(false);
  return (
    <PerformanceContext.Provider
      value={{
        isLowPerformance,
        setIsLowPerformance,
        isDebugMode,
        setIsDebugMode,
      }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};
export default PerformanceProvider;

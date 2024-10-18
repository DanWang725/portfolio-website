import { useState } from 'react';

import { createContext } from 'react';

export const PerformanceContext = createContext({
  isLowPerformance: false,
  setIsLowPerformance: () => {},
});

const PerformanceProvider = ({ children }) => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  return (
    <PerformanceContext.Provider
      value={{ isLowPerformance, setIsLowPerformance }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};
export default PerformanceProvider;

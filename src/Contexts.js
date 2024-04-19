import { createContext } from 'react';

export const PerformanceContext = createContext({
  isLowPerformance: false,
  setIsLowPerformance: () => {},
});

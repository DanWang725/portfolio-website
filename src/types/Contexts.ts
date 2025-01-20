export interface PerformanceProviderValues {
  isDebugMode: boolean;
  setIsDebugMode: React.Dispatch<React.SetStateAction<boolean>>;
  isLowPerformance: boolean;
  setIsLowPerformance: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface StylingProviderValues {
  navbarClassOverrides: string;
  setNavbarClassOverrides: React.Dispatch<React.SetStateAction<string>>;
}

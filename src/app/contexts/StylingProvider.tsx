import { createContext, ReactElement, ReactNode, useState } from 'react';
import { StylingProviderValues } from '../../types/Contexts';

export const StylingContext = createContext({
  navbarClassOverrides: '',
  setNavbarClassOverrides: () => {},
} as StylingProviderValues);

const StylingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navbarClassOverrides, setNavbarClassOverrides] = useState('');
  return (
    <StylingContext.Provider
      value={{ navbarClassOverrides, setNavbarClassOverrides }}
    >
      {children}
    </StylingContext.Provider>
  );
};
export default StylingProvider;

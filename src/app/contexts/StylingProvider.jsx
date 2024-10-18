import { createContext, useState } from 'react';

export const StylingContext = createContext({
  navbarClassOverrides: '',
  setNavbarClassOverrides: () => {},
});

const StylingProvider = ({ children }) => {
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

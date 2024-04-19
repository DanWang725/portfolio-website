import { AppRoutes } from '../Routes';
import Footer from '../components/Footer';
import { Navbar } from '../navbar/Navbar';
import { useState } from 'react';
import { useActionHashScroll } from './Hooks/useActionHashScroll';

const Body = () => {
  useActionHashScroll();
  const [navbarClassOverrides, setNavbarClassOverrides] = useState('');
  return (
    <div className="Body">
      <Navbar classOverride={navbarClassOverrides} />
      <AppRoutes setNavbarClass={setNavbarClassOverrides} />
    </div>
  );
};
export default Body;

import { AppRoutes } from '../app/router';
import Footer from '../components/Footer';
import { Navbar } from '../navbar/Navbar';
import { useState } from 'react';
import { useActionHashScroll } from './Hooks/useActionHashScroll';

const Body = () => {
  useActionHashScroll();
  return (
    <div className="Body">
      <Navbar />
      <AppRoutes />
    </div>
  );
};
export default Body;

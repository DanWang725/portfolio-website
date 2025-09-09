import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function WithNavigationScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [pathname]);

  return null;
}

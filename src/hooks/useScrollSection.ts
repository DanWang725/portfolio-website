import { useEffect, useState } from 'react';

export const useScrollSection = ({
  initialSection,
}: {
  initialSection: string;
}) => {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 100 // Adjust the offset as needed
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleUrlAnchorChange = () => {
      const sectionFromUrl = window.location.hash.substr(1);
      setActiveSection(sectionFromUrl);
    };

    window.addEventListener('hashchange', handleUrlAnchorChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlAnchorChange);
    };
  }, []);

  useEffect(() => {
    window.location.hash = activeSection;
  }, [activeSection]);

  return { activeSection };
};

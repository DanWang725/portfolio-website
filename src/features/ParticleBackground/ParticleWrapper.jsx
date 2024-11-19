import { useCallback, useRef } from 'react';
import { getParticleOptions } from './utils';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { loadMotionPlugin } from 'tsparticles-plugin-motion';
import { loadExternalBubbleInteraction } from 'tsparticles-interaction-external-bubble';
import './ParticleWrapper.css';

const ParticleWrapper = () => {
  const containerRef = useRef();
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadMotionPlugin(engine);
    await loadExternalBubbleInteraction(engine);
    await loadFull(engine, false);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
    containerRef.current = container;
  }, []);
  //   useEffect(() => {
  //     if (scrollSpeed > 0) containerRef.current.playEmitter("scrollUp");
  //     else containerRef.current?.pauseEmitter("scrollUp");
  //   }, [scrollSpeed]);
  //   useEffect(() => {
  //     console.log(containerRef.current);
  //   });

  // useEffect(() => {
  //   let lastScrollY = window.scrollY;
  //   let animationFrameId;

  //   const updateScrollSpeed = () => {
  //     const currentScrollY = window.scrollY;
  //     const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
  //     setScrollSpeed(scrollSpeed / 1000);
  //     lastScrollY = currentScrollY;
  //     animationFrameId = requestAnimationFrame(updateScrollSpeed);
  //   };

  //   updateScrollSpeed(); // Initial call

  //   return () => {
  //     cancelAnimationFrame(animationFrameId);
  //     window.removeEventListener("scroll", updateScrollSpeed);
  //   };
  // }, []);

  return (
    <Particles
      id="tsparticles"
      className="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={getParticleOptions(2)}
      style={{ backgroundColor: '#001242' }}
      z
    />
  );
};
export default ParticleWrapper;

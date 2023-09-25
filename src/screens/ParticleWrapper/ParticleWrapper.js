import { useCallback, useEffect, useRef, useState } from "react";
import { getParticleOptions, option2 } from "./utils";
import getScroller from "scroll-speed";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadMotionPlugin } from "tsparticles-plugin-motion";
import { loadExternalBubbleInteraction } from "tsparticles-interaction-external-bubble";

const ParticleWrapper = () => {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const containerRef = useRef();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
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
  useEffect(() => {
    console.log(containerRef.current);
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let animationFrameId;

    const updateScrollSpeed = () => {
      const currentScrollY = window.scrollY;
      const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      setScrollSpeed(scrollSpeed / 1000);
      lastScrollY = currentScrollY;
      animationFrameId = requestAnimationFrame(updateScrollSpeed);
    };

    updateScrollSpeed(); // Initial call

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", updateScrollSpeed);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={getParticleOptions(scrollSpeed)}
    />
  );
};
export default ParticleWrapper;

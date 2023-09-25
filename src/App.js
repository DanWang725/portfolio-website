import { Navbar } from "./navbar/Navbar";
import { AppRoutes } from "./Routes";
import { HashRouter } from "react-router-dom";
import React, { useCallback, useEffect } from "react";
import Footer from "./components/Footer";
import Body from "./screens/Body";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Particles from "react-particles";
import { scroll } from "scroll-speed";
import ParticleWrapper from "./screens/ParticleWrapper/ParticleWrapper";

function App() {
  // useEffect(() => {
  //   window.addEventListener(
  //     "scroll",
  //     () => {
  //       document.body.style.setProperty(
  //         "--scroll",
  //         window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //       );
  //     },
  //     false
  //   );
  // }, []);
  return (
    <>
      <ParticleWrapper></ParticleWrapper>
      <HashRouter>
        <Body></Body>
      </HashRouter>
    </>
  );
}

export default App;

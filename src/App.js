import { Navbar } from "./navbar/Navbar";
import { AppRoutes } from "./Routes";
import { HashRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Body from "./screens/Body";

function App() {
  useEffect(() => {
    const bg = document.querySelector(".background-image");
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;

      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });
  }, []);
  return (
    <HashRouter>
      <Body></Body>
    </HashRouter>
  );
}

export default App;

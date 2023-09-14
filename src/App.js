import { Navbar } from "./navbar/Navbar";
import { AppRoutes } from "./Routes";
import { HashRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
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
  }, []);
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

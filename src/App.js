import { Navbar } from "./navbar/Navbar";
import { AppRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";

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
    <BrowserRouter>
      <div className="App">
        <Navbar disableAtHome={true} />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { useLocation } from "react-router-dom";
import { AppRoutes } from "../Routes";
import Footer from "../components/Footer";
import { Navbar } from "../navbar/Navbar";
import "./Body.css";
import { useState } from "react";

const Body = () => {
  const location = useLocation();
  const [navbarClassOverrides, setNavbarClassOverrides] = useState("");
  return (
    <div className="Body">
      <Navbar classOverride={navbarClassOverrides} />
      <AppRoutes setNavbarClass={setNavbarClassOverrides} />
      <Footer />
    </div>
  );
};
export default Body;

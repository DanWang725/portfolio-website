import { useLocation } from "react-router-dom";
import { AppRoutes } from "../Routes";
import Footer from "../components/Footer";
import { Navbar } from "../navbar/Navbar";
import "./Body.css";

const Body = () => {
  const location = useLocation();
  return (
    <div className="Body">
      {location.pathname !== "/" && <Navbar />}
      <AppRoutes />
      <Footer />
    </div>
  );
};
export default Body;

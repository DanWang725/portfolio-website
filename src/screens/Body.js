import { useLocation } from "react-router-dom";
import { AppRoutes } from "../Routes";
import Footer from "../components/Footer";
import { Navbar } from "../navbar/Navbar";

const Body = () => {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <AppRoutes />
      <Footer />
    </div>
  );
};
export default Body;

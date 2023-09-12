import { NavLink } from "react-router-dom";
import { useScrollSection } from "../screens/Hooks/useScrollSection";
import "./Article.css";

const ArticleSidebar = () => {
  const { activeSection, handleLinkClick } = useScrollSection("home");
  return (
    <div className="article-sidebar">
      <ul>
        <li>
          <NavLink
            to="/#home"
            isActive={() => {
              return window.location.hash === "#home";
            }}
          >
            Section 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#projects"
            isActive={() => {
              return window.location.hash === "#projects";
            }}
            onClick={() => handleLinkClick("projects")}
          >
            Section 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#about"
            isActive={() => {
              return window.location.hash === "#about";
            }}
            onClick={() => handleLinkClick("about")}
          >
            Section 3
          </NavLink>
        </li>
        {/* Add more links for other sections */}
      </ul>
    </div>
  );
};
export default ArticleSidebar;

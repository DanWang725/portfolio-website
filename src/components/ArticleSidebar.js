import { useScrollSection } from "../screens/Hooks/useScrollSection";

const ArticleSidebar = () => {
  const { activeSection, handleLinkClick } = useScrollSection("home");
  return (
    <ul>
      <li>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Section 1
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleLinkClick("projects")}
        >
          Section 2
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
        >
          Section 3
        </a>
      </li>
      {/* Add more links for other sections */}
    </ul>
  );
};
export default ArticleSidebar;

import { NavLink } from "react-router-dom";
import "./Article.css";

const ArticleSidebar = ({ entries, handleBack }) => {
  return (
    <div className="article-sidebar">
      Navivation
      <ul className="article-sidebar-list">
        {entries?.map(({ id, title }) => (
          <li key={id}>
            <NavLink
              to={`#${id}`}
              isActive={() => {
                return window.location.hash === `#${id}`;
              }}
            >
              {`${title}`}
            </NavLink>
          </li>
        ))}
      </ul>
      {handleBack && <button onClick={handleBack}>Back</button>}
    </div>
  );
};
export default ArticleSidebar;

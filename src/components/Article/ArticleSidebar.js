import { NavLink } from "react-router-dom";
import { getHash, scrollToHash } from "../../shared-utils/src";
import "./Article.css";

const ArticleSidebar = ({ entries, handleBack }) => {
  return (
    <div className="article-sidebar">
      Navigation
      <ul className="article-sidebar-list">
        {entries?.map(({ id, title }) => (
          <li key={id}>
            <NavLink
              to={`#${id}`}
              isActive={() => {
                return getHash() === `#${id}`;
              }}
              style={() =>
                getHash() === `#${id}` ? { fontWeight: "600" } : {}
              }
              onClick={() => scrollToHash(id)}
            >
              {`${title}`}
            </NavLink>
          </li>
        ))}
      </ul>
      {handleBack && (
        <button
          onClick={() => {
            handleBack();
          }}
        >
          Back
        </button>
      )}
    </div>
  );
};
export default ArticleSidebar;

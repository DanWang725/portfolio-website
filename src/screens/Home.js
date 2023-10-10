import "./Home.css";
import { articleContent } from "./utils";
import { getArticleEntriesFromObject } from "../components/Article/utils";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToHash } from "../shared-utils/src";

const Home = ({ setNavbarClass }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const articles = getArticleEntriesFromObject(articleContent);
  useEffect(() => {
    setNavbarClass(inView ? "navbar-hidden" : "navbar-hidden navbar-show");
    return () => setNavbarClass("");
  }, [inView, setNavbarClass]);

  return (
    <>
      <div className="content-section">
        <section className="name-page" id={"home"} ref={ref}>
          <h1 className="title-text title-name">{"Hey, I'm Daniel"}</h1>
          <h2 className="title-text title-desc">
            Computer science student, Front End Developer.
          </h2>
          <h3 className="title-navigation">
            Scroll down or navigate to these areas
          </h3>
          <div className="title-nav-items">
            <li>
              <Link
                to={"#about"}
                className="title-links"
                onClick={() => scrollToHash("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/work-term-report"}
                className="title-links"
                onClick={() => scrollToHash("about")}
              >
                Work Term Reports
              </Link>
            </li>
          </div>
          <></>
        </section>
        {articles}
      </div>
    </>
  );
};
export default Home;

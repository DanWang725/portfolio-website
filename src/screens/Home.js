import "./Home.css";
import { articleContent } from "./utils";
import { getArticleEntriesFromObject } from "../components/Article/utils";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToHash } from "../shared-utils/src";

const Home = ({ setNavbarClass }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const articles = getArticleEntriesFromObject(articleContent);
  useEffect(() => {
    setNavbarClass(inView ? "navbar-hidden" : "navbar-hidden navbar-show");
    return () => setNavbarClass("");
  }, [inView, setNavbarClass]);

  return (
    <>
      <div className="content-section">
        <section className="name-page" id={"home"}>
          <h1 className="title-text title-name" ref={ref}>
            {"Hey, I'm Daniel"}
          </h1>
          <h2 className="title-text title-desc">
            Computer science student, Front End Developer.
          </h2>
          <li>
            <Link to={"#about"} onClick={() => scrollToHash("about")}>
              test
            </Link>
          </li>
        </section>
        {articles}
      </div>
    </>
  );
};
export default Home;

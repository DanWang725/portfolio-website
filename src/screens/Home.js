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
        <div id="home"></div>
        <section className="std-container name-page" ref={ref}>
          <h1>{"I'm Daniel Wang"}</h1>
          <h2 className="name-page-about">
            {
              "A Student Software Engineer based in Guelph, Ontario. I'm currently a front end developer at "
            }
            <b>NCR</b>
            {", I am open to any oppertunity."}
          </h2>
          <h3 className="name-page-navigation">
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

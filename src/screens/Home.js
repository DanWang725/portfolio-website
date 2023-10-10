import { HashScroll } from "react-hash-scroll";
import { Navbar } from "../navbar/Navbar";
import "./Home.css";
import { articleContent } from "./utils";
import { getArticleEntriesFromObject } from "../components/Article/utils";
import { useInView } from "react-intersection-observer";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

const Home = ({ setNavbarClass }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const articles = getArticleEntriesFromObject(articleContent);
  useEffect(() => {
    console.log(ref, inView, entry);
  }, [ref, inView, entry]);
  useEffect(() => {
    setNavbarClass(inView ? "navbar-hidden" : "navbar-hidden navbar-show");
    return () => setNavbarClass("");
  }, [inView, setNavbarClass]);

  return (
    <>
      <div className="content-section">
        <HashScroll hash="#home">
          <div></div>
        </HashScroll>
        <section className="name-page">
          <h1 className="title-text title-name" ref={ref}>
            {"Hey, I'm Daniel"}
          </h1>
          <h2 className="title-text title-desc">
            Computer science student, Front End Developer.
          </h2>
          <li>
            <Link to={"#about"}>test</Link>
          </li>
        </section>
        {articles}
      </div>
    </>
  );
};
export default Home;

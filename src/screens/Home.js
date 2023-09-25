import { ArticleEntry } from "../components/Article";
import { HashScroll } from "react-hash-scroll";
import { Navbar } from "../navbar/Navbar";
import "./Home.css";
import { articleContent } from "./utils";
import { getArticleEntriesFromObject } from "../components/Article/utils";

const Home = () => {
  const articles = getArticleEntriesFromObject(articleContent);
  return (
    <>
      <div className="content-section">
        <HashScroll hash="#home">
          <section className="name-page"></section>
        </HashScroll>
        <section className="name-page static">
          <h1 className="omega-title">{"Hey, I'm Daniel"}</h1>
          <h2>Computer science student, Front End Developer.</h2>
          <h1></h1>
        </section>
        <Navbar></Navbar>
        <div></div>
        {articles}
      </div>
    </>
  );
};
export default Home;

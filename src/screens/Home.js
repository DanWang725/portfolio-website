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
          <section className="name-page">
            <h1 className="omega-title">{"Hey, I'm Daniel"}</h1>
            <h2>Computer science student, front end developer.</h2>
            <h1></h1>
          </section>
        </HashScroll>
        <div></div>
        {articles}
      </div>
    </>
  );
};
export default Home;

import ArticleEntry from "../components/ArticleEntry";
import ArticleLayout from "../components/ArticleLayout";
import ArticleSidebar from "../components/ArticleSidebar";
import { HashScroll } from "react-hash-scroll";
import { Navbar } from "../navbar/Navbar";
import "./Home.css";
import { articleContent } from "./utils";

const Home = () => {
  const articles = articleContent.map((article) => (
    <ArticleEntry
      {...article}
      id={article.title.toLowerCase()}
      key={article.title.toLowerCase()}
    />
  ));
  return (
    <>
      <div className="content-section">
        <HashScroll hash="#home">
          <section className="name-page">
            <h1 className="omega-title">{"Hi Aww, Im Daniel"}</h1>
            <h2>Computer science student, front end developer.</h2>
            <h1>Abungus</h1>
          </section>
        </HashScroll>
        <div></div>
        <ArticleLayout
          content={articles}
          sidebar={<ArticleSidebar></ArticleSidebar>}
        />
      </div>
    </>
  );
};
export default Home;

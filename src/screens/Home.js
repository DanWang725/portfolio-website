import ArticleEntry from "../components/ArticleEntry";
import ArticleLayout from "../components/ArticleLayout";
import ArticleSidebar from "../components/ArticleSidebar";
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
        <section className="name-page" id="#home">
          <h1 className="omega-title">{"Hi Aww, Im Daniel"}</h1>
          <h2>Computer science student, front end developer.</h2>
          <h1>Abungus</h1>
        </section>
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

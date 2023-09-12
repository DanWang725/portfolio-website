import ArticleEntry from "../components/ArticleEntry";
import ArticleLayout from "../components/ArticleLayout";
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
        <section className="name-page">
          <h1 className="omega-title">{"Hi Aww, Im Daniel"}</h1>
          <h2>Computer science student, front end developer.</h2>
          <h1>Abungus</h1>
        </section>
        <Navbar extraClasses="test" />
        <ArticleLayout
          content={articles}
          sidebar={<a href="#projects">go here</a>}
        />
      </div>
    </>
  );
};
export default Home;

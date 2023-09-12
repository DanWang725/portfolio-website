import "./Article.css";
import { HashScroll } from "react-hash-scroll";
const ArticleEntry = ({ title, content, id, key }) => {
  return (
    <HashScroll hash={id}>
      <section className="article-entry" key={key} id={id}>
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    </HashScroll>
  );
};
export default ArticleEntry;

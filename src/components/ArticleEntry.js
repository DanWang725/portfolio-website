import "./Article.css";
const ArticleEntry = ({ title, content, id, key }) => {
  return (
    <section className="article-entry" key={key} id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
};
export default ArticleEntry;

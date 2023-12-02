const ArticleEntry = ({ title, content, id, key, isFirstArticle = false }) => {
  return (
    <section
      className={`std-container article-entry ${
        isFirstArticle ? "first-article" : ""
      } `}
      key={key}
      id={id}
    >
      {title && <h1 className="article-title">{title}</h1>}
      <p className="article-content">{content}</p>
    </section>
  );
};
export default ArticleEntry;

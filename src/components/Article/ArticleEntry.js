import EntryColumns from './EntryColumns';

const ArticleEntry = ({
  title,
  content,
  id,
  key,
  isFirstArticle = false,
  options,
}) => {
  if (options?.columns && options.columns !== 'single') {
    return (
      <EntryColumns
        title={title}
        content={content}
        id={id}
        key={key}
        isFirstArticle={isFirstArticle}
      />
    );
  }
  return (
    <section
      className={`std-container article-entry ${
        isFirstArticle ? 'first-article' : ''
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

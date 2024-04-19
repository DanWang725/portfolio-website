const EntryColumns = ({ title, content, id, key, isFirstArticle = false }) => {
  return (
    <section
      className={`std-container article-entry ${
        isFirstArticle ? 'first-article' : ''
      } `}
      key={key}
      id={id}
    >
      {title && <h1 className="article-title">{title}</h1>}
      <div className="article-column">
        {content?.[0]}
        {content?.[1]}
      </div>
    </section>
  );
};

export default EntryColumns;

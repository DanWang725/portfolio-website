import "./Article.css";
const ArticleLayout = ({ content, sidebar, classOverrides = "" }) => {
  return (
    <div className={`article-body ${classOverrides}`}>
      <div>{sidebar}</div>
      <div>{content}</div>
    </div>
  );
};
export default ArticleLayout;

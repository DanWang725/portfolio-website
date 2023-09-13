import "./Article.css";
const ArticleLayout = ({ content, sidebar }) => {
  return (
    <div className="article-body">
      <div>{sidebar}</div>
      <div>{content}</div>
    </div>
  );
};
export default ArticleLayout;

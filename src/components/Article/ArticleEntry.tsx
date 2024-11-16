import { ArticleSection } from './types/article';
interface ArticleEntryProps {
  article: ArticleSection;
  isFirstArticle?: boolean;
  options?: {
    columns: 'single' | 'multi';
  };
}

const ArticleEntry: React.FC<ArticleEntryProps> = ({
  article,
  isFirstArticle = false,
  options = { columns: 'single' },
}) => {
  const { title, content } = article;
  return (
    <section
      className={`std-container article-entry ${
        isFirstArticle ? 'first-article' : ''
      } `}
      key={article.id}
      id={article.id}
    >
      {title && <h1 className="article-title">{title}</h1>}
      <div className="article-column">{content}</div>
    </section>
  );
};
export default ArticleEntry;

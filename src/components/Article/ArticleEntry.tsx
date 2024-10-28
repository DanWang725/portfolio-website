import EntryColumns from './EntryColumns';
import { ArticleSection } from './types/article';
interface ArticleEntryProps {
  article: ArticleSection;
  id: string;
  key: string;
  isFirstArticle?: boolean;
  options?: {
    columns: 'single' | 'multi';
  };
}

const ArticleEntry: React.FC<ArticleEntryProps> = ({
  article,
  id,
  key,
  isFirstArticle = false,
  options = { columns: 'single' },
}) => {
  const { title, content } = article;
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

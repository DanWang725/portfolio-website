import ArticleList from './ArticleList';
import ArticleSidebar from './ArticleSidebar';
import { Article } from './types/article';

export interface ArticleLayoutProps {
  article: Article;
  handleBack: () => void;
  classOverrides?: string;
}
const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  article,
  handleBack,
  classOverrides = '',
}) => {
  return (
    <div className={`article-body ${classOverrides}`}>
      <ArticleList entries={article.entries} />
      <ArticleSidebar entries={article.entries} handleBack={handleBack} />
    </div>
  );
};
export default ArticleLayout;

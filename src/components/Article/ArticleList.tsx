import ArticleEntry from './ArticleEntry';
import { Article, ArticleSection } from './types/article';

interface ArticleListProps {
  entries: ArticleSection[];
}

const ArticleList: React.FC<ArticleListProps> = ({ entries }) => {
  return entries?.map((entry, index) => (
    <ArticleEntry
      isFirstArticle={index === 0}
      article={entry}
      id={entry.id}
      key={entry.title?.toLowerCase()}
    />
  ));
};
export default ArticleList;

import ArticleEntry from './ArticleEntry';
import { Article, ArticleSection } from './types/article';

interface ArticleListProps {
  entries: ArticleSection[];
}
/**
 * Display a list of articles
 * @param param0
 * @returns
 */
const ArticleList: React.FC<ArticleListProps> = ({ entries }) => {
  return entries?.map((entry, index) => (
    <ArticleEntry isFirstArticle={index === 0} article={entry} key={entry.id} />
  ));
};
export default ArticleList;

import ArticleEntry from './ArticleEntry';
import { ArticleEntry as ArticleEntryTypes } from './types/article';

interface ArticleEntryListProps {
  entries: ArticleEntryTypes[];
}
/**
 * Display a list of articles
 * @param param0
 * @returns
 */
const ArticleEntryList: React.FC<ArticleEntryListProps> = ({ entries }) => {
  return entries?.map((entry, index) => (
    <ArticleEntry
      isFirstArticle={index === 0}
      articleEntry={entry}
      key={entry.id}
    />
  ));
};
export default ArticleEntryList;

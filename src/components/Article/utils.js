import ArticleEntry from "./ArticleEntry";
export const getArticleEntriesFromObject = (entries) =>
  entries?.map((entry) => (
    <ArticleEntry {...entry} id={entry.id} key={entry.title.toLowerCase()} />
  ));

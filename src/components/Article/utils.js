import ArticleEntry from "./ArticleEntry";
export const getArticleEntriesFromObject = (entries) =>
  entries.map((entry) => (
    <ArticleEntry
      {...entry}
      id={entry.title.toLowerCase()}
      key={entry.title.toLowerCase()}
    />
  ));

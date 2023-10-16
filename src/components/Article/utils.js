import ArticleEntry from "./ArticleEntry";
export const getArticleEntriesFromObject = (entries) =>
  entries?.map((entry, index) => (
    <ArticleEntry
      isFirstArticle={index === 0}
      {...entry}
      id={entry.id}
      key={entry.title?.toLowerCase()}
    />
  ));

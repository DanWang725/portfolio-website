import ArticleLayout from "../../components/Article/ArticleLayout";
import { useState } from "react";
import ArticleSidebar from "../../components/Article/ArticleSidebar";
import { workTermReportEntries } from "./entries";
import WorkTermReportCard from "./WorkTermReportCard";
import { getArticleEntriesFromObject } from "../../components/Article/utils";

const WorkTermReport = () => {
  const [selectedArticle, setSelectedArticle] = useState();

  return (
    <div className="content-section">
      {selectedArticle ? (
        <>
          <button onClick={() => setSelectedArticle()}>Back</button>
          <ArticleLayout
            content={getArticleEntriesFromObject(selectedArticle.entries)}
            sidebar={
              <ArticleSidebar
                entries={selectedArticle.entries}
              ></ArticleSidebar>
            }
          />
        </>
      ) : (
        workTermReportEntries.map((article) => (
          <WorkTermReportCard
            workTermReportEntry={article}
            setSelectedWtr={setSelectedArticle}
            key={article.title.toLowerCase()}
          />
        ))
      )}
    </div>
  );
};
export default WorkTermReport;

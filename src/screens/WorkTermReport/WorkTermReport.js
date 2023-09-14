import ArticleLayout from "../../components/Article/ArticleLayout";
import { useState } from "react";
import ArticleSidebar from "../../components/Article/ArticleSidebar";
import { workTermReportEntries } from "./entries";
import WorkTermReportCard from "./WorkTermReportCard";
import { getArticleEntriesFromObject } from "../../components/Article/utils";
import { useNavigate } from "react-router-dom";

const WorkTermReport = () => {
  const [selectedArticle, setSelectedArticle] = useState();
  const navigate = useNavigate();

  return (
    <div className="content-section">
      {selectedArticle ? (
        <>
          <ArticleLayout
            content={getArticleEntriesFromObject(selectedArticle.entries)}
            sidebar={
              <ArticleSidebar
                entries={selectedArticle.entries}
                handleBack={() => {
                  setSelectedArticle();
                  navigate("/work-term-report");
                }}
              ></ArticleSidebar>
            }
          />
        </>
      ) : (
        <>
          <h1>Work Term Reports</h1>
          {workTermReportEntries.map((article) => (
            <WorkTermReportCard
              workTermReportEntry={article}
              setSelectedWtr={setSelectedArticle}
              key={article.title.toLowerCase()}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default WorkTermReport;

import ArticleLayout from "../../components/Article/ArticleLayout";
import { useEffect, useState } from "react";
import ArticleSidebar from "../../components/Article/ArticleSidebar";
import { workTermReportEntries } from "./entries";
import WorkTermReportCard from "./WorkTermReportCard";
import { getArticleEntriesFromObject } from "../../components/Article/utils";
import { useNavigate, useParams } from "react-router-dom";

const WorkTermReport = () => {
  const params = useParams();
  console.log(params);
  // const [selectedArticle, setSelectedArticle] = useState();
  const navigate = useNavigate();
  const selectedArticle = workTermReportEntries.find(
    (article) => article.id === params.reportId
  ) || { id: "unknown" };

  return (
    <div className="content-section">
      {params.reportId ? (
        <ArticleLayout
          classOverrides={"no-title"}
          content={getArticleEntriesFromObject(selectedArticle.entries)}
          sidebar={
            <ArticleSidebar
              entries={selectedArticle.entries}
              handleBack={() => {
                navigate("/work-term-report");
              }}
            ></ArticleSidebar>
          }
        />
      ) : (
        <>
          <section className="std-container work-report-container">
            <h1 className="article-title">Work Term Reports</h1>
            <p className="article-content">
              These reports are cover my experiences and achievements during my
              co-op work terms. 8-month work terms are split into two separate
              reports covering 4 months each.
            </p>
            <div className="report-list">
              {workTermReportEntries.map((article) => (
                <WorkTermReportCard
                  workTermReportEntry={article}
                  setSelectedWtr={(entry) =>
                    navigate(`/work-term-report/${entry.id}`)
                  }
                  key={article.title.toLowerCase()}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default WorkTermReport;

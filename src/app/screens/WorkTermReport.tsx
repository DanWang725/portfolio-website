import ArticleLayout from '../../components/Article/ArticleLayout';
import { useEffect, useState } from 'react';
import ArticleSidebar from '../../components/Article/ArticleSidebar';
import { workTermReportEntries } from '../../features/Articles/entries';
import WorkTermReportCard from '../../features/Articles/WorkTermReportCard';
import { useNavigate, useParams } from 'react-router-dom';
import ContentSection from '../../components/Sections/ContentSection';
import { List } from '@mui/material';

const WorkTermReport = () => {
  const params = useParams();
  // const [selectedArticle, setSelectedArticle] = useState();
  const navigate = useNavigate();
  const selectedArticle =
    workTermReportEntries.find((article) => article.id === params.reportId) ||
    null;

  if (selectedArticle) {
    return (
      <ArticleLayout
        classOverrides={'no-title'}
        article={selectedArticle}
        handleBack={() => navigate('/work-term-report')}
      />
    );
  }

  return (
    <ContentSection
      styleOverrides={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <h1 className="article-title">Work Term Reports</h1>
      <p className="article-content">
        These reports are cover my experiences and achievements during my co-op
        work terms. 8-month work terms are split into two separate reports
        covering 4 months each.
      </p>
      <div className="report-list">
        <List>
          {workTermReportEntries.map((article) => (
            <WorkTermReportCard
              workTermReportEntry={article}
              setSelectedWtr={(entry) =>
                navigate(`/work-term-report/${entry.id}`)
              }
              key={article.title.toLowerCase()}
            />
          ))}
        </List>
      </div>
    </ContentSection>
  );
};
export default WorkTermReport;

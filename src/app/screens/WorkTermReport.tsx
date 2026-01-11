import ArticleLayout from '../../components/Article/ArticleLayout';
import { workTermReportEntries } from '../../features/Articles/entries';
import WorkTermReportCard from '../../features/Articles/WorkTermReportCard';
import { useNavigate, useParams } from 'react-router-dom';
import ContentSection from '../../components/Sections/ContentSection';
import { Box, Grid2, List, Typography } from '@mui/material';
import ContentHeader from '@components/Sections/ContentHeader';
import ContentText from '@components/Sections/ContentText';

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
        padding: '2rem',
      }}
    >
      <ContentHeader>Work Term Reports</ContentHeader>
      <ContentText styleOverrides={{ mb: '1rem' }}>
        These reports are cover my experiences and achievements during my co-op
        work terms during my computer science co-op degree. Each report covers a
        4-month period, or semester. Any 8-month work terms are split into two
        reports.
      </ContentText>
      <Grid2 container spacing={3} justifyContent="center">
        {workTermReportEntries.map((article) => (
          <WorkTermReportCard
            workTermReportEntry={article}
            setSelectedWtr={(entry) =>
              navigate(`/work-term-report/${entry.id}`)
            }
            key={article.title.toLowerCase()}
          />
        ))}
      </Grid2>
    </ContentSection>
  );
};
export default WorkTermReport;

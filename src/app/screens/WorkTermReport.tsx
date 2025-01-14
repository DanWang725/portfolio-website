import ArticleLayout from '../../components/Article/ArticleLayout';
import { workTermReportEntries } from '../../features/Articles/entries';
import WorkTermReportCard from '../../features/Articles/WorkTermReportCard';
import { useNavigate, useParams } from 'react-router-dom';
import ContentSection from '../../components/Sections/ContentSection';
import { Box, List, Typography } from '@mui/material';

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
      <Typography variant="h2">Work Term Reports</Typography>
      <Typography variant="h6">
        These reports are cover my experiences and achievements during my co-op
        work terms during my computer science co-op degree. Each report covers a
        4-month period, or semester. Any 8-month work terms are split into two
        reports.
      </Typography>
      <Box display={'flex'} sx={{ gap: '10px', flexDirection: 'column' }}>
        {workTermReportEntries.map((article) => (
          <WorkTermReportCard
            workTermReportEntry={article}
            setSelectedWtr={(entry) =>
              navigate(`/work-term-report/${entry.id}`)
            }
            key={article.title.toLowerCase()}
          />
        ))}
      </Box>
    </ContentSection>
  );
};
export default WorkTermReport;

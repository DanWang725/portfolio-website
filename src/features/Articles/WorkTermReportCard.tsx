import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid2 } from '@mui/material';
import { Article } from '../../components/Article/types/article';
import { WebCard } from '@components/WebCard';
import { WorkTermArticle } from './types/types';
import CardHeader from './components/CardHeader';

interface WorkTermReportCardProps {
  workTermReportEntry: WorkTermArticle;
  setSelectedWtr: (wtr: Article) => void;
}

const WorkTermReportCard: React.FC<WorkTermReportCardProps> = ({
  workTermReportEntry,
  setSelectedWtr,
}) => {
  return (
    <Grid2 size={{ sm: 8, md: 5 }}>
      <WebCard onClick={() => setSelectedWtr(workTermReportEntry)}>
        <CardHeader article={workTermReportEntry} />
        <Typography variant="h5">{workTermReportEntry.jobPosition}</Typography>
        <Typography>{workTermReportEntry.description}</Typography>
      </WebCard>
    </Grid2>
  );
};
export default WorkTermReportCard;

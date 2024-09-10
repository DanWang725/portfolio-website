import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const WorkTermReportCard = ({ workTermReportEntry, setSelectedWtr }) => {
  return (
    <Card
      sx={{ maxWidth: 1000, display: 'flex' }}
      onClick={() => setSelectedWtr(workTermReportEntry)}
      className="report-card"
    >
      <CardActionArea sx={{ width: 'auto' }}>
        <CardMedia
          component="img"
          sx={{ width: '10rem' }}
          image={workTermReportEntry?.image}
          alt={workTermReportEntry.title}
        />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ fontSize: '1em' }}
        >
          {workTermReportEntry.title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {workTermReportEntry.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default WorkTermReportCard;

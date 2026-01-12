import { Box, Typography } from '@mui/material';
import { WorkTermArticle } from '../types/types';

interface CardHeaderProps {
  article: WorkTermArticle;
}

const CardHeader: React.FC<CardHeaderProps> = ({ article }) => {
  return (
    <Box display="flex" flexDirection="row-reverse" gap={2} mb="1rem">
      <img src={article.image} alt={article.title} height="130px" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Typography variant="h5">{article.semester}</Typography>
          <Typography variant="caption">
            <i>{article.startDate}</i> - <i>{article.endDate}</i>
          </Typography>
        </Box>
        <Typography variant="h3">{article.company}</Typography>
      </Box>
    </Box>
  );
};
export default CardHeader;

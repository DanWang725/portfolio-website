import { Box, Divider, Typography } from '@mui/material';
import { ArticleSection } from './types/article';
interface ArticleEntryProps {
  article: ArticleSection;
  isFirstArticle?: boolean;
  options?: {
    columns: 'single' | 'multi';
  };
}

const ArticleEntry: React.FC<ArticleEntryProps> = ({
  article,
  isFirstArticle = false,
  options = { columns: 'single' },
}) => {
  const { title, content } = article;
  return (
    <Box
      className={`std-container article-entry ${
        isFirstArticle ? 'first-article' : ''
      } `}
      key={article.id}
      id={article.id}
    >
      {title && (
        <Typography variant="h4" my={'1rem'}>
          {title}
        </Typography>
      )}
      <Divider variant="middle" />
      <Typography
        variant="body1"
        gutterBottom
        style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
      >
        {content}
      </Typography>
    </Box>
  );
};
export default ArticleEntry;

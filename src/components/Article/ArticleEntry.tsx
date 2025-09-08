import { Box, Divider, Typography } from '@mui/material';
import { ArticleEntry as ArticleEntryTypes } from './types/article';
import ArticleEntryContent from './ArticleEntryContent';
interface ArticleEntryProps {
  articleEntry: ArticleEntryTypes;
  isFirstArticle?: boolean;
  options?: {
    columns: 'single' | 'multi';
  };
}

const ArticleEntry: React.FC<ArticleEntryProps> = ({
  articleEntry,
  isFirstArticle = false,
  options = { columns: 'single' },
}) => {
  const title = articleEntry?.title ?? null;

  const hasSections = Array.isArray(articleEntry.content);

  return (
    <Box
      className={`std-container article-entry ${
        isFirstArticle ? 'first-article' : ''
      } `}
      key={articleEntry.id}
      id={articleEntry.id}
    >
      {title && (
        <Typography variant="h4" my={'1rem'}>
          {title}
        </Typography>
      )}
      <Divider variant="middle" />
      {hasSections ? (
        <ArticleEntryContent article={articleEntry} />
      ) : (
        <Typography
          variant="body1"
          gutterBottom
          style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
        >
          {articleEntry.content as string}
        </Typography>
      )}
    </Box>
  );
};
export default ArticleEntry;

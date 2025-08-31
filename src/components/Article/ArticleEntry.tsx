import { Box, Divider, Typography } from '@mui/material';
import { ArticleSection, SectionType } from './types/article';
import CustomArticleEntry from './CustomArticleSection';
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
  const { title } = article;
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
      {article.type === SectionType.CUSTOM ? (
        <CustomArticleEntry article={article} />
      ) : (
        <Typography
          variant="body1"
          gutterBottom
          style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
        >
          {article.content}
        </Typography>
      )}
    </Box>
  );
};
export default ArticleEntry;

import { Box } from '@mui/material';
import ContentSection from '../Sections/ContentSection';
import ArticleEntryList from './ArticleEntryList';
import ArticleSidebar from './ArticleSidebar';
import { Article } from './types/article';

export interface ArticleLayoutProps {
  article: Article;
  handleBack: () => void;
  classOverrides?: string;
}
const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  article,
  handleBack,
  classOverrides = '',
}) => {
  return (
    <ContentSection styleOverrides={{ display: 'flex' }}>
      <ArticleSidebar entries={article.entries} handleBack={handleBack} />
      <Box
        sx={{
          width: '95%',
          height: 'auto',
          padding: '1rem',
        }}
      >
        <ArticleEntryList entries={article.entries} />
      </Box>
    </ContentSection>
  );
};
export default ArticleLayout;

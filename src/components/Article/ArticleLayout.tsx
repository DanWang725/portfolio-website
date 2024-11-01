import { Box } from '@mui/material';
import ContentSection from '../Sections/ContentSection';
import ArticleList from './ArticleList';
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
    <Box display="flex">
      <ArticleSidebar entries={article.entries} handleBack={handleBack} />
      <ContentSection>
        <ArticleList entries={article.entries} />
      </ContentSection>
    </Box>
  );
};
export default ArticleLayout;

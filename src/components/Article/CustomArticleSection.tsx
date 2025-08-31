import { Box, Grid2, Typography } from '@mui/material';
import {
  ContentType,
  CustomArticleSection,
  ImageContent,
  Sections,
  SectionType,
  TextContent,
} from './types/article';

interface CustomArticleSectionProps {
  article: CustomArticleSection;
}
interface CustomSectionProps {
  content: Sections;
}
const CustomSection: React.FC<CustomSectionProps> = ({ content }) => {
  switch (content.type) {
    case ContentType.IMAGE:
      return (
        <Box
          width="100%"
          sx={{ ...content.sx }}
          component="img"
          src={content.src}
        />
      );
    case ContentType.TEXT:
      return (
        <Typography variant="body1" sx={{ ...content.sx }}>
          {content.text}
        </Typography>
      );
    default:
      return null;
  }
};

const CustomArticleEntry: React.FC<CustomArticleSectionProps> = ({
  article,
}) => {
  return (
    <Grid2 container spacing={article.gap ?? 2}>
      {article.content.map((section, index) => {
        return (
          <Grid2 key={index} size={section.size}>
            <CustomSection content={section} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
export default CustomArticleEntry;

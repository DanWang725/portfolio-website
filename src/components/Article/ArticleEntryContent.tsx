import { Box, Grid2, List, ListItem, Typography } from '@mui/material';
import {
  ContentType,
  ArticleEntry,
  ImageContent,
  Sections,
  TextContent,
  RootSections,
  SubheaderContent,
} from './types/article';

interface CustomArticleSectionProps {
  article: ArticleEntry;
}

interface NonRootSectionsProps {
  content: Sections;
}

const NonRootSections: React.FC<NonRootSectionsProps> = ({ content }) => {
  switch (content.type) {
    case ContentType.IMAGE:
      return (
        <Box
          width="100%"
          sx={{ ...content.sx }}
          component="img"
          src={content.value.src}
        />
      );
    case ContentType.TEXT:
      return (
        <Typography variant="body1" sx={{ ...content.sx }}>
          {content.value}
        </Typography>
      );
    case ContentType.LIST:
      return (
        <List sx={{ listStyleType: 'disc', ...content.sx }}>
          {content.value.map((item: string, index: number) => (
            <ListItem key={index} sx={{ display: 'list-item' }}>
              {item}
            </ListItem>
          ))}
        </List>
      );
    default:
      return null;
  }
};

const ArticleEntryContent: React.FC<CustomArticleSectionProps> = ({
  article,
}) => {
  return (
    <Grid2 container spacing={article.gap ?? 2}>
      {(article.content as RootSections[]).map((section, index) => {
        if (section.type === ContentType.SUBHEADER) {
          return (
            <>
              <Typography
                variant="h5"
                sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}
                id={section.id}
                key={section.id}
              >
                {section.title}
              </Typography>
              <Grid2 container spacing={2}>
                {section.value.map((content, index) => {
                  return (
                    <Grid2 key={index} size={content?.size ?? 12}>
                      <NonRootSections content={content} />
                    </Grid2>
                  );
                })}
              </Grid2>
            </>
          );
        }
        return (
          <Grid2 key={index} size={section?.size ?? 12}>
            <NonRootSections content={section} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
export default ArticleEntryContent;

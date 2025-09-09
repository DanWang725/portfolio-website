import { Box, Grid2, List, ListItem, Typography } from '@mui/material';
import {
  ContentType,
  ArticleEntry,
  Sections,
  RootSections,
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
        <>
          <Box
            width="100%"
            sx={{ ...content.sx }}
            component="img"
            src={content.value.src}
          />
          {content.value?.caption && (
            <Typography variant="caption">{content.value.caption}</Typography>
          )}
        </>
      );
    case ContentType.TEXT:
      return (
        <Typography variant="body1" sx={{ ...content.sx }}>
          {content.value}
        </Typography>
      );
    case ContentType.LIST:
      return (
        <List
          sx={{
            listStyleType: 'disc',
            listStylePosition: 'inside',
            paddingX: 0,
            ...content.sx,
          }}
        >
          {content.value.map((item: string, index: number) => (
            <ListItem key={`list-${index}`} sx={{ display: 'list-item' }}>
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
    <Grid2 container spacing={article.gap ?? 2} key={article.id}>
      {(article.content as RootSections[]).map((section, index) => {
        if (section.type === ContentType.SUBHEADER) {
          return (
            <>
              <Typography
                variant="h5"
                sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}
                id={section.id}
                key={`subheader-${section.id}`}
              >
                {section.title}
              </Typography>
              <Grid2
                container
                spacing={2}
                key={`subheader-container-${section.id}`}
              >
                {section.value.map((content, index2) => {
                  return (
                    <Grid2
                      key={`${section.id}-${index2}`}
                      size={content?.size ?? 12}
                    >
                      <NonRootSections content={content} />
                    </Grid2>
                  );
                })}
              </Grid2>
            </>
          );
        }
        return (
          <Grid2 key={`${article.id}-${index}`} size={section?.size ?? 12}>
            <NonRootSections content={section} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
export default ArticleEntryContent;

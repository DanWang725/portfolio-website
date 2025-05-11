import { Breakpoint } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export enum SectionType {
  TEXT = 'text',
  CUSTOM = 'custom',
}

export interface Article {
  title: string;
  id: string;
  image?: string;
  description: string;
  entries: ArticleSection[];
}

/**
 * Represents a section of an article. Should have a title and an id.
 */
interface BaseArticleSection {
  title: string;
  /** Will be displayed in the sidebar. Should be max 7 characters */
  titleShort?: string;
  id: string;
}

export interface TextSection extends BaseArticleSection {
  content: string;
  type: SectionType.TEXT;
}

export interface CustomArticleSection extends BaseArticleSection {
  content: Sections[];
  gap?: number;
  type: SectionType.CUSTOM;
}

export type ArticleSection = TextSection | CustomArticleSection;

export interface ContentGrid {
  size: number | { [key in Breakpoint]?: number };
  sx?: SxProps<Theme>;
}

export enum ContentType {
  IMAGE = 'image',
  TEXT = 'text',
}
export interface ImageContent {
  /** Image content for the article, requires src and alt properties */
  type: ContentType.IMAGE;
  src: string;
  alt: string;
}

export interface TextContent {
  /** Text content for the article, requires text property */
  type: ContentType.TEXT;
  text: string;
}
export type Sections = ContentGrid & (ImageContent | TextContent);

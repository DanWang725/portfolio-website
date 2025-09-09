import { Breakpoint } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export interface Article {
  title: string;
  id: string;
  image?: string;
  description: string;
  entries: ArticleEntry[];
}

interface BaseArticleEntry {
  content: string | RootSections[];
  gap?: number;
  id?: string;
  title?: string;
  titleShort?: string;
}

/** A article entry with a header included. Include a short title to have it appear in the sidebar */
interface HeaderArticleEntry extends BaseArticleEntry {
  content: string | RootSections[];
  id: string;
  title: string;
  titleShort?: string;
}

export type ArticleEntry = BaseArticleEntry | HeaderArticleEntry;

export interface ContentGrid {
  size?: number | { [key in Breakpoint]?: number };
  sx?: SxProps<Theme>;
}

export enum ContentType {
  IMAGE = 'image',
  TEXT = 'text',
  LIST = 'list',
  SUBHEADER = 'subheader',
}

interface BaseContent {
  /** Type of content, can be image, text or list */
  type: ContentType;
  value: any;
}

export interface SubheaderContent extends BaseContent {
  /** Subheader content for some content, must contain some content */
  type: ContentType.SUBHEADER;
  value: Sections[];
  id: string;
  title: string;
  titleShort?: string;
}
export interface ImageContent extends BaseContent {
  /** Image content for the article, requires src and alt properties */
  type: ContentType.IMAGE;
  value: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface TextContent extends BaseContent {
  /** Text content for the article, requires text property */
  type: ContentType.TEXT;
  value: string;
}

export interface ListContent extends BaseContent {
  /** List content for the article, requires items property */
  type: ContentType.LIST;
  value: string[];
}
export type Sections = ContentGrid & (ImageContent | TextContent | ListContent);
export type RootSections = Sections | SubheaderContent;

import { Breakpoint } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export enum EntryType {
  TEXT = 'text',
  HEADER = 'header',
}

export interface Article {
  title: string;
  id: string;
  image?: string;
  description: string;
  entries: ArticleEntry[];
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

interface BaseArticleEntry {
  id?: string;
  content: any;
}

/** A text article entry with no header */
interface TextArticleEntry extends BaseArticleEntry {
  type: EntryType.TEXT;
  content: string | Sections[];
}

/** A article entry with a header included. Include a short title to have it appear in the sidebar */
interface HeaderArticleEntry extends BaseArticleEntry {
  id: string;
  type: EntryType.HEADER;
  content: string | Sections[];
  title: string;
  titleShort?: string;
}

export type ArticleEntry = TextArticleEntry | HeaderArticleEntry;

export interface ContentGrid {
  size: number | { [key in Breakpoint]?: number };
  sx?: SxProps<Theme>;
}

export enum ContentType {
  IMAGE = 'image',
  TEXT = 'text',
  LIST = 'list',
}

interface BaseContent {
  /** Type of content, can be image, text or list */
  type: ContentType;
  value: any;
}
export interface ImageContent extends BaseContent {
  /** Image content for the article, requires src and alt properties */
  type: ContentType.IMAGE;
  value: {
    src: string;
    alt: string;
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
export type Sections = ContentGrid & BaseContent;

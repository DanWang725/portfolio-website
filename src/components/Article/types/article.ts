export interface Article {
  title: string;
  id: string;
  image: string;
  description: string;
  entries: ArticleSection[];
}

export interface ArticleSection {
  title: string;
  /** Will be displayed in the sidebar. Should be max 7 characters */
  titleShort?: string;
  id: string;
  content: string;
}

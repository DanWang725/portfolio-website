export interface Article {
  title: string;
  id: string;
  image: string;
  description: string;
  entries: ArticleSection[];
}

export interface ArticleSection {
  title: string;
  id: string;
  content: string;
}

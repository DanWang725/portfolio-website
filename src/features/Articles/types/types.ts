import { Article } from '@components/Article/types/article';
enum JobTags {
  React = 'react',
}
export interface WorkTermArticle extends Article {
  jobPosition: string;
  company: string;
  startDate: string;
  endDate: string;
  semester: string;
  tags: JobTags[];
}

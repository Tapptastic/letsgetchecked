import { IAuthor } from './Author';

export interface IPost {
  author: string;
  content: string;
  description: string;
  id: number;
  publish_date: string;
  slug: string;
  title: string;
  is_published: boolean;
}

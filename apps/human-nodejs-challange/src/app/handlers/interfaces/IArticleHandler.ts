import { Article } from '../../../database/entities/Article';

export default interface IArticleHandler {
  get(id: string): Promise<Article>;
  create(payload: { title: string, slug: string, publishedAt?: Date }): Promise<Article>;
  delete(id: string): Promise<boolean>;
}

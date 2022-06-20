
import { Article } from '../../database/entities/Article';
import { AppDataSource } from '../../database/data-source';
import IArticleHandler from './interfaces/IArticleHandler';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

class ArticleHandler implements IArticleHandler {
  repo: Repository<Article>;

  constructor() {
    this.repo = AppDataSource.getRepository(Article);
  }

  async get(id: string): Promise<Article> {
    try {
      return await this.repo.findOne({
        where: { id }
      });
    } catch (error) {
      throw error
    }
  }

  async create(payload: { title: string, slug: string, publishedAt?: Date }): Promise<Article> {
    try {
      const newArticle = new Article();
      newArticle.title = payload.title;
      newArticle.slug = payload.slug;
      newArticle.publishedAt = payload.publishedAt;

      const errors = await validate(newArticle, { stopAtFirstError: true });

      if (errors.length) {
        throw Error(JSON.stringify(errors[0].constraints))
      }

      const savedArticle = await this.repo.save(newArticle);

      return savedArticle;
    } catch (error) {
      throw error
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const article = await this.repo.findOne({
        where: { id }
      });

      if (!article) {
        return false;
      }

      await this.repo.delete(article.id);

      return true;
    } catch (error) {
      throw error
    }
  }
}

export default new ArticleHandler();

import { Entity, Column } from 'typeorm';
import { Base, IBase } from './Base';

export interface IArticle extends IBase {
  title: string,
  slug: string,
  publishedAt: Date | null
}

@Entity()
export class Article extends Base implements IArticle {
  @Column({ name: 'title' })
  title: string

  @Column({ name: 'slug' })
  slug: string

  @Column({ name: 'published_at', nullable: true })
  publishedAt: Date
}

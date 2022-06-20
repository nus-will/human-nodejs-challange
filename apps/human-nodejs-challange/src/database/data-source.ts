import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from '../config/config';
import { Article } from './entities/Article';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.DB_HOST || "localhost",
  port: parseInt(config.DB_PORT) || 3306,
  username: config.DB_USERNAME || "test",
  password: config.DB_PASSWORD || "test",
  database: config.DB_DATABASE || "test",
  synchronize: true,
  logging: false,
  entities: [Article, User],
  migrations: [],
  subscribers: [],
})

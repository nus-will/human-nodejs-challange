import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.NX_DB_HOST || "localhost",
  port: parseInt(process.env.NX_DB_PORT) || 3306,
  username: process.env.NX_DB_USERNAME || "test",
  password: process.env.NX_DB_PASSWORD || "test",
  database: process.env.NX_DB_DATABASE || "test",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
})

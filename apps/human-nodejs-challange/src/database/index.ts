import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { AppDataSource } from './data-source';

export interface IDatabase {
  setup(): Promise<DataSource>;
}

class Database implements IDatabase {
  async setup(): Promise<DataSource> {
    try {
      return await AppDataSource.initialize();
    } catch (error) {
      console.error('Failed connect Database', error);
    }
  }
}

export default new Database();

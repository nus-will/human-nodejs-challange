import * as dotenv from 'dotenv';

dotenv.config();

interface ConfigInterface {
  PORT: string;
  NODE_ENV: string;
  DB_HOST: string;
  DB_PORT: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  JWT_SECRET: string;
}

export const config: ConfigInterface = {
  PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || '',
  DB_HOST: process.env.DB_HOST || '',
  DB_PORT: process.env.DB_PORT || '',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_DATABASE: process.env.DB_DATABASE || '',
  JWT_SECRET: process.env.JWT_SECRET || ''
};

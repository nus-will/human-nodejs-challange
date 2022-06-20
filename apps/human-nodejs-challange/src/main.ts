import application from './app';

import { Application } from 'express';
import database from './database';
import { config } from './config/config';

async function startApiServer() {
  await database.setup();
  const app: Application = await application.server();
  app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT} in ${config.NODE_ENV} mode`);
  });

  return app;
}

startApiServer();

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

import application from './app';

import { Application } from 'express';
import database from './database';

async function startApiServer() {
  await database.setup();
  const app: Application = await application.server();
  app.listen(process.env.NX_PORT, () => {
    console.log(`Listening on port ${process.env.NX_PORT} in ${process.env.NODE_ENV} mode`);
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

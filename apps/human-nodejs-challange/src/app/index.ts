import * as express from 'express';
import * as cors from 'cors';
import baseRouter from './routes/index';

interface IApi {
  server(): Promise<express.Application>;
}

class Api implements IApi {
  async server(): Promise<express.Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/api/v1', baseRouter.routes);

    app.get('/', (_req: express.Request, res: express.Response) => {
      res.send('Welcome to NUS express application!');
    });

    app.use((req: express.Request, res: express.Response) => {
      res.status(404).json({ status: 'error', requestedPath: req.path })
    })

    return app;
  }
}

export default new Api();

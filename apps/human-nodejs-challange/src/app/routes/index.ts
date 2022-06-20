import { Router } from 'express';
import { IRouter } from './interfaces/IRouter';
import ArticleRouter from './ArticleRouter';

const router = Router();

class BaseRouter implements IRouter {
  get routes(): Router {
    router.use('/articles', ArticleRouter.routes);
    return router;
  }
}

export default new BaseRouter();

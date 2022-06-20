import { Router } from 'express';
import { IRouter } from './interfaces/IRouter';
import ArticleRouter from './ArticleRouter';
import UserRouter from './UserRouter';

const router = Router();

class BaseRouter implements IRouter {
  get routes(): Router {
    router.use('/articles', ArticleRouter.routes);
    router.use('/users', UserRouter.routes);
    return router;
  }
}

export default new BaseRouter();

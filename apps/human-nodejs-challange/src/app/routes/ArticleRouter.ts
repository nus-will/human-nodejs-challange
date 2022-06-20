import { Router, Request, Response } from 'express';
import { IRouter } from './interfaces/IRouter';
import { successResponse, errorResponse } from './response';

const router = Router();

class ArticleRouter implements IRouter {
  get routes (): Router {
    router.get(
      '/:id',
      async (_req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          return successResponse(res, { article: {} });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.post(
      '/',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          return successResponse(res, { article: {} });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.delete(
      '/:id',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          return successResponse(res, { isDeleted: true });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    return router;
  }
}

export default new ArticleRouter();

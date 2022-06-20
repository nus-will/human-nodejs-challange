import { Router, Request, Response } from 'express';
import { IRouter } from './interfaces/IRouter';
import { successResponse, errorResponse } from './response';
import ArticleHandler from '../handlers/ArticleHandler';

const router = Router();

class ArticleRouter implements IRouter {
  get routes (): Router {
    router.get(
      '/published',
      async (_req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const articles = await ArticleHandler.getPublished();

          return successResponse(res, { articles });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.get(
      '/:id',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const { params } = req;
          const { id } = params;
          const article = await ArticleHandler.get(id);

          return successResponse(res, { article });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.post(
      '/',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const article = await ArticleHandler.create(req.body);
          return successResponse(res, { article });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.delete(
      '/:id',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const { params } = req;
          const { id } = params;
          const result = await ArticleHandler.delete(id);
          return successResponse(res, { isDeleted: result });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    return router;
  }
}

export default new ArticleRouter();

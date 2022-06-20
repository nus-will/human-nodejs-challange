import { Router, Request, Response } from 'express';
import { IRouter } from './interfaces/IRouter';
import { successResponse, errorResponse } from './response';
import UserHandler from '../handlers/UserHandler';

const router = Router();
const EXPIRE_TOKEN_DURATION = 60 * 60 * 1000;

class UserRouter implements IRouter {
  get routes (): Router {
    router.post(
      '/',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const user = await UserHandler.create(req.body);
          return successResponse(res, { user });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.post(
      '/login',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const token = await UserHandler.login(req.body);

          res.cookie('access_token', token, { httpOnly: true, expires: new Date(Date.now() + EXPIRE_TOKEN_DURATION) });
          return successResponse(res, { isLoggedIn: true })
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    return router;
  }
}

export default new UserRouter();

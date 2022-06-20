import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import { config } from "../../config/config";
import { unauthorizedResponse } from "../routes/response";

export const auth = (req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      throw Error('invalid token');
    }

    jwt.verify(token, config.JWT_SECRET);
    req.isLoggedIn = true;

    next();
  } catch (error) {
    return unauthorizedResponse(res, error);
  }
}

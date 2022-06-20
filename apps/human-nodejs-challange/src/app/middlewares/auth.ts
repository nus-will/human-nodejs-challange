import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import { config } from "../../config/config";
import { unauthorizedResponse } from "../routes/response";

export const auth = (req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
      throw Error('invalid token');
    }

    jwt.verify(token, config.JWT_SECRET);

    next()
  } catch (error) {
    return unauthorizedResponse(res, error);
  }
}

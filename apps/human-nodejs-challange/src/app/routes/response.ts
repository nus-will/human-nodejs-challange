import { Response } from 'express';

export const successResponse = (res: Response, data: any): Response<any, Record<string, any>> => {
  return res.status(200).json({ status: 'success', data })
}

export const errorResponse = (res: Response, error: Error): Response<any, Record<string, any>> => {
  return res.status(200).json({ status: 'error', message: error.message, stack: error.stack })
}

export const unauthorizedResponse = (res: Response, error: Error): Response<any, Record<string, any>> => {
  return res.status(401).json({ status: 'error', message: error.message, stack: error.stack })
}

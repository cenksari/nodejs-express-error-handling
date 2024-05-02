import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import { NotFoundError } from '../errors/NotFoundError';
import { BadRequestError } from '../errors/BadRequestError';
import { AuthenticationError } from '../errors/AuthenticationError';

export const errorHandlerMiddleware: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof NotFoundError) {
    return res
      .status(error.statusCode)
      .send({ title: error.message });
  }

  if (error instanceof BadRequestError) {
    return res
      .status(error.statusCode)
      .send({ title: error.message });
  }

  if (error instanceof AuthenticationError) {
    return res
      .status(error.statusCode)
      .send({ title: error.message });
  }

  return res
    .status(500)
    .send({ title: error.message });
};

import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

import { CustomError } from '../errors/CustomError';

export const errorHandlerMiddleware: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    res.status(error.StatusCode).send(error.serialize());

    return;
  }

  res.status(500).send({ message: `Something bad happened: ${error.message}` });

  next();
};

import { ErrorRequestHandler, Request, Response } from 'express';

import { CustomError } from '../errors/CustomError';

export const errorHandlerMiddleware: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response
) => {
  if (error instanceof CustomError) {
    return res.status(error.StatusCode).send(error.serialize());
  }

  return res.status(500).send({ message: `Something bad happened: ${error.message}` });
};

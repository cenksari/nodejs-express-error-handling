import express, { Express, Request, Response, NextFunction } from 'express';

import userRoutes from './routes/userRoutes';

import { NotFoundError } from './errors/NotFoundError';

import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

interface IConfig {
  port: number;
  nodeEnv: string;
}

const config: IConfig = {
  port: Number(process.env.PORT || '3000'),
  nodeEnv: process.env.NODE_ENV || 'development',
};

const app: Express = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError('Requested resource not found on this server.'));
});

app.use(errorHandlerMiddleware);

app.listen(config.port, () => console.log(`App listening on PORT ${config.port}`));

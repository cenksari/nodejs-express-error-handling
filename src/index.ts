import express, { Express } from 'express';

import userRoutes from './routes/userRoutes';

import { NotFoundError } from './errors/NotFoundError';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.all('*', () => {
  throw new NotFoundError('Requested resource not found in our server.');
});

app.use(errorHandlerMiddleware);

app.listen(port, () => console.log(`App listening on PORT ${port}`));

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { booksRouter } from './books/books.router';
import { notFoundHandler } from './middleware/not-found.middleware';
import { errorHandler } from './middleware/error.middleware';

export const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/books', booksRouter);

app.use(notFoundHandler);
app.use(errorHandler);

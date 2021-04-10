import express, { Request, Response } from 'express';
import { validation } from '../middleware/validation.middleware';
import { BookSchema } from './book.schema';

import * as BookService from './books.service';
import { BaseBook, Book } from './book.interface';

export const booksRouter = express.Router();

booksRouter.get('/', async (req: Request, res: Response) => {
  try {
    const books: Book[] = await BookService.findAll();
    res.status(200).send(books);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

booksRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const book: Book = await BookService.find(id);

    if (book) {
      return res.status(200).send(book);
    }

    res.sendStatus(404);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

booksRouter.post(
  '/',
  validation(BookSchema),
  async (req: Request, res: Response) => {
    try {
      const book: BaseBook = req.body;

      const newBook = await BookService.create(book);

      res.status(201).json(newBook);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

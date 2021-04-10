import { BaseBook, Book } from './book.interface';
import { Books } from './books.interface';

// store
const books: Books = {
  1: {
    id: 1,
    name: 'LOTR',
    price: 50,
    description: 'Good',
    authors: ['Tolkien'],
  },
  2: {
    id: 2,
    name: 'Harry Potter',
    price: 20,
    description: 'Boy with magic wand',
    authors: ['JK'],
  },
};

// service methods

export const findAll = async (): Promise<Book[]> => Object.values(books);

export const find = async (id: number): Promise<Book> => books[id];

export const create = async (newBook: BaseBook): Promise<Book> => {
  const id = new Date().valueOf();

  books[id] = {
    id,
    ...newBook,
  };

  return books[id];
};

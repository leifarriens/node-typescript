import { BaseBook, Book } from './book.interface';
import { Books } from './books.interface';

// store
const books: Books = {
  1: {
    id: 1,
    name: 'LOTR',
    price: 50,
    description: 'Good',
    author: 'Tolkien',
  },
  2: {
    id: 2,
    name: 'Harry Potter',
    price: 20,
    description: 'Boy with magic wand',
    author: 'JK',
  },
};

// service methods

export const findAll = async (): Promise<Book[]> => Object.values(books);

export const find = async (id: number): Promise<Book> => books[id];

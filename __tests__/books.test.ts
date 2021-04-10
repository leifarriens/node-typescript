import { app } from '../src/app';
import request from 'supertest';

describe('GET /books', () => {
  it('should return width status code 200', async () => {
    const res = await request(app).get('/api/books').send();
    expect(res.status).toBe(200);
  });

  it('should return an array', async () => {
    const res = await request(app).get('/api/books').send();
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.any(Array))
  });
});

describe('GET /books/:id', () => {
  it('should return width status code 200', async () => {
    const res = await request(app).get('/api/books/1').send();
    expect(res.status).toBe(200);
  });
});

describe('POST /books', () => {
  it('should return width status code 201', async () => {
    const res = await request(app).post('/api/books').send({
      name: "Title",
      price: 10,
      authors: ["Author"]
    });
    expect(res.status).toBe(201);
  });

  it('should return width status code 201', async () => {
    const res = await request(app).post('/api/books').send();
    expect(res.status).toBe(400);
  });
});

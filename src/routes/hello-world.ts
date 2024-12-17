import { Hono } from 'hono';

const app = new Hono()
  .get('/', (c) => c.json('helo world!'))
  .post('/', (c) => c.json('create an author', 201));

export default app;

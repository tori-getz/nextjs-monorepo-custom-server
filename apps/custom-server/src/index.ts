import path from 'path';
import express from 'express';
import next from 'next';
import { requestIdMiddleware } from '@myapp/next-app/express-middlewares';

const dev = process.env.NODE_ENV !== 'production';
const nextAppDir = path.join(__dirname, '..', '..', 'next-app');

const app = next({ dev, dir: nextAppDir });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(requestIdMiddleware);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT ?? 3000;
  server.listen(port, () => {
    console.log(`> Custom server ready on http://localhost:${port}`);
  });
});

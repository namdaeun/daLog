import cors from 'cors';
import express from 'express';
import postsRouter from './routes/posts.js';

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`[api] listening on http://localhost:${port}`);
});

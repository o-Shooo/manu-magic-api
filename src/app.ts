import { Hono } from 'hono';
import { helloWorld } from './routes';

const app = new Hono();

// FIXME: ロガーのミドルウェアを追加

// ルート設定
app.route('/hello-world', helloWorld);

export default app;

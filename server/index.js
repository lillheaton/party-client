const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

app.use((ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

module.exports = app;
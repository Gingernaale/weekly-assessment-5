
const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodypar = require('koa-bodyparser');
const router = require('./krouter');
const path = require('path');
const cors = require('koa-cors');
const staticFld = path.join(__dirname, '../../client')
const port = 3000;

app.use(serve(staticFld));
app.use(bodypar());
app.use(router.routes());

app.listen(port, () => {
  console.log('Serving on ' + port); // eslint-disable-line no-console
})

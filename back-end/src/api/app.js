const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');

const loginRouter = require('../router/login');
const registrationRouter = require('../router/registration');
const productRouter = require('../router/product');
const saleRouter = require('../router/sale');

const { HTTP_OK_STATUS } = require('../status');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/products', productRouter);
app.use('/orders', saleRouter);

// app.use('/images', imageRouter); Refatorar para deixar padronizado!

app.get('/images/:file', (req, res) => {
  const { file } = req.params;
  res.status(HTTP_OK_STATUS).sendFile(path.resolve(__dirname, `../../public/${file}`));
});

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = require('../router/loginRouter');
const userRouter = require('../router/userRouter');

const app = express();
app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use((error, _req, res, _next) => {
  res.status(error.status).json({ message: error.message });
});

module.exports = app;

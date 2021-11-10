const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./src/router/loginRouter');

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Backend porta ${PORT} ok!`));

app.use('/login', loginRouter);

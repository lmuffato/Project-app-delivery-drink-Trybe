const port = process.env.PORT || 3001;
const app = require('./app');
const userController = require('../layers/users/userController');

app.get('/test', (_req, res) => {
  return res.status(418).json({ message: "mensagem de test" });
});
/*
http://localhost:3001/test
*/

app.use('/users', userController);

app.listen(port);
console.log(`Api rodando na porta ${port}`);

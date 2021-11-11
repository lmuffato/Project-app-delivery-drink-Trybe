const port = process.env.PORT || 3001;
const app = require('./app');
const usersControllers = require('../layers/users/usersControllers');
const salesControllers = require('../layers/sales/salesControllers');

app.get('/test', (_req, res) => {
  return res.status(418).json({ message: "mensagem de test" });
});
/*
http://localhost:3001/test
*/

app.use('/users', usersControllers);
/*
http://localhost:3001/users
*/

app.use('/sales', salesControllers);
/*
http://localhost:3001/sales
*/

app.listen(port);
console.log(`Api rodando na porta ${port}`);

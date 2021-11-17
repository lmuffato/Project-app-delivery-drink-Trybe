const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
const server = require('http').createServer(app);

const port = 3001;

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    
  },
});

const product = require('../controllers/Products');
const user = require('../controllers/User');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
};

require('../sockets/login')(io);

app.use(cors(corsOptions));

app.get('/products', product.getProducts);
app.post('/login', user.login);
app.post('/register', user.createUser);
// Adicionar lógica de validação de login
app.get('/users', user.listUsers);

app.use('/images', express.static(path.join(__dirname, '..', '..', '/public')));

server.listen(port, () => console.log(`Ouvindo na porta ${port}!`));
module.exports = app;

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
const sale = require('../controllers/Sales');
const validateJwtAdmin = require('../auth/validateJwtAdmin');
const validateToken = require('../auth/validateToken');
const { validateJWT } = require('../auth/validateGeneric');
const getIdByToken = require('../auth/validateJwt');

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
app.post('/register/admin', validateJwtAdmin, user.createUser);
app.post('/validToken', validateToken);
app.get('/orderDetails/:id', sale.getSaleDetails);
app.post('/sales', validateJWT, sale.addNew);
app.get('/sales', getIdByToken, sale.getSale);
app.post('/sales/:id', sale.changeStatus);
app.get('/seller/sales', getIdByToken, sale.getSalesBySellerId);
app.use('/images', express.static(path.join(__dirname, '..', '..', '/public')));

server.listen(port, () => console.log(`Ouvindo na porta ${port}!`));
module.exports = app;

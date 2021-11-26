const port = process.env.PORT || 3001;
const conect = require('socket.io');
const prot = require('http');
const app = require('./app');

const http = prot.createServer(app);

const io = conect(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH'],
  },
});

io.on('connection', (socket) => {
  socket.on('clientOrderSatus', (data) => {
    io.emit('serverNewStatus', data);
  });
});

http.listen(port);
console.log(`Api rodando na porta ${port}`);

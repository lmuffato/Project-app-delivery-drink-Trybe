const { Sale } = require('../database/models');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('message', () => console.log('asdasd'));

  socket.on('order', async ({ id, status }) => {
    await Sale.findOne({ id }, { status });
    io.emit('update');
  });
});

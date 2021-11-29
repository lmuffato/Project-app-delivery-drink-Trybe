const { Sale } = require('../database/models');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('message', () => console.log('asdasd'));

  socket.on('changeStatus', async ({ id, status }) => {
    const sale = await Sale.findByPk(id, { status });
    await sale.update({ status });
    io.emit('updateStatus');
  });
});

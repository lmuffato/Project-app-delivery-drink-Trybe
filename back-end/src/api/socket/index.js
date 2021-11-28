const { updateStatus } = require('../services/sale');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('status', async (id, status) => {
      console.log(id, status);
      await updateStatus({ status }, { id });
      io.emit('status', 'status');
    });
  });
};

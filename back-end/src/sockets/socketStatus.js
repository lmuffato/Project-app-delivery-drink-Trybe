const { Sale } = require('../database/models');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('changeStatus', async ({ newStatus, id }) => {
      await Sale.update({ status: newStatus }, { where: { id } })
        .then(() => io.emit('changeStatus', { newStatus, id }))
        .catch((error) => console.log(error.message));
    });
  });  
};

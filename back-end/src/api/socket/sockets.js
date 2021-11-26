module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('changeStatus', ({ id, myStatus }) => {
      console.log(id, myStatus);
      io.emit('updateStatus', { id, myStatus });
    });
  });
};

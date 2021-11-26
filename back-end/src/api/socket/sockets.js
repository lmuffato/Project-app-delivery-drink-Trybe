module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('changeStatus', (myStatus) => {
      io.emit('updateStatus', myStatus);
    });
  });
};

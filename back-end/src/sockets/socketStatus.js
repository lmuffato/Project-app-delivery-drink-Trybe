module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('changeStus', async ({ _newStatus, _id }) => {

    });
  });  
};

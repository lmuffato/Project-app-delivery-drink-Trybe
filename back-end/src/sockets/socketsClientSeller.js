module.exports = (io) => io.on('connection', (socket) => {
  console.log('entrou server socket');
  // socket.on('updateFromCustomer', () => {
  //   io.emit('updateSeller');
  // });

  // socket.on('updateFromSeller', () => {
  //   // io.emit('updateCustomer');
  // });

  socket.on('updateCustomerReciveOrder', (obj) => {
    console.log(obj);
  });
});

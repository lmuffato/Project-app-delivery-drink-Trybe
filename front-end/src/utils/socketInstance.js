const { io } = require('socket.io-client');

export default function socketInstance() {
  const socketServerUrl = 'http://localhost:3001';
  return io(socketServerUrl);
}

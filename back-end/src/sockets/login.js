const user = require('../controllers/User');

module.exports = (io) => io.on('connection', async (socket) => {
  socket.on('login', async (userInfo) => {
    const { password, email } = userInfo;
    const userData = await user.login(password, email);
    socket.emit('userLogin', (userData));
  });

  socket.on('create', async (userInfo) => {
    const { name, password, email } = userInfo; 
    const newUser = await user.createUser(name, password, email);
    socket.emit('createdUser', (newUser));
  });
});
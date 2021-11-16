const port = process.env.PORT || 3001;

const httpServer = require('./app');

httpServer.listen(port, () => console.log(`Server rodando na porta: ${port}`)); 

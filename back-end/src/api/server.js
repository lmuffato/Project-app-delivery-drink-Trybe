const PORT = process.env.PORT || 3001;
const app = require('./app');

app.listen(PORT);
console.log(`Api rodando na porta ${PORT}`);

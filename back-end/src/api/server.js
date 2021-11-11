const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening in on port: ${PORT}`));

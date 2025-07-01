

const server = require('./src/app')
const { conn } = require('./src/db');

const PORT = process.env.PORT || 3001;


conn.sync({ alter: true }).then(() => {
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }).catch(error => console.error('Error al sincronizar la base de datos:', error));


const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connection = require('./connet');


const port = process.env.PORT || 3000;

app.use(express.json());
// consumir el router
const clienteRouter = require('./src/router/cliente.router').router;

// uasar las rutas

app.use(clienteRouter);


app.listen(port, () => {
  console.log('API de aseguradora escuchando en el puerto ' + port);
});

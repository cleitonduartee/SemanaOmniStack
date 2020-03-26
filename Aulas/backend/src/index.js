const express = require('express'); //importa as funcionalidade do express
const cors = require('cors');
const routes = require('./routes');


const app = express(); // criando aplicação
app.use(cors())
app.use(express.json()); // Configurando para que as requisições seja convertida em um objeto js .
app.use(routes);

app.listen(3333);


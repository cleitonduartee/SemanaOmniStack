const express = require('express'); //importa as funcionalidade do express


const app = express(); // criando aplicação

app.get('/', (request,response)=>{ //primeira rota
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno:'Cleiton Duarte'
    });
});

app.listen(3333);


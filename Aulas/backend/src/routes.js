const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');


const routes = express.Router();

/**
 * Rota / Recurso
 */
/**  Métodos HTTP:
 *  
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**  Tipos de parÂmetros:
 *  
 * Query Params: Parâmetros nomeados enviados na rota após "?"(geralmente para : filtros, paginação)-- EX: na requisição --> '/ongs?name=Cleiton' no request.query vai ter {name:'Cleiton'}
 * Route Params: ParÂmetros utilizados para identificar recursos -- EX: no back-end --> '/ongs/:id'  na requisição --> '/ongs/1' no request.parms vai esta {id:'1'}
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos  -- EX: na requisição --> no body formato JSON {"name":"Cleiton"} no request.body vai esta {name: 'Cleiton'}
 */

 /**Bancos de dados:
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server ...
  * NoSQL: MongoDB,CouchDB....
  */

  /**Formas de comunicação com Banco de Dados:
   * 
   * Driver do banco de dados : Usa linguagem SQL --->EX: SELECT * FROM users -- (tabela de usuarios)
   * Query Buider: Usa linguagem JavaScript --->EX: table('users').select('*').where('condição se necessário') -- (tabela de usuarios) 
   */
routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create); //primeira rota pelo método "post". -- "ongs" é o recurso dessa rota

routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.list);
routes.post('/sessions', SessionsController.create);

    module.exports = routes;
    

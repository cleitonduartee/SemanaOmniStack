
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
/** Criando Tabela pelo Migations ;
 * 
 * no package.json criar um diretorio do magrations --> EX: migrations:{diretory:'./crc/database/migrations'}
 * 
 * npm knex migrate:make create_ongs --> cria uma estrutura na pasta selecionada no diretory para criar as colunas da tabela no banco.

 * npx knex migrate:Latest   ----> EX: execulta a criação da tabela que está na migrations <---
 */
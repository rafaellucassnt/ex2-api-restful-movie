/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('filmes', function (table) {
      table.increments('id').primary();
      table.string('titulo').notNullable();
      table.integer('ano').notNullable();
      table.string('genero').notNullable();
      table.string('duracao').notNullable();
      table.string('classificacao').notNullable();
      table.string('sinopse').notNullable();
      table.float('nota').notNullable();
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('filmes');
  };

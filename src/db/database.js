const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: './db/movies.db',
    },
    useNullAsDefault: true,
  });
  
  module.exports = knex;
  
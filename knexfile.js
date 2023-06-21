module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './db/movies.db',
      },
      migrations: {
        directory: './db/migrations',
      },
      useNullAsDefault: true,
    },
  };
  
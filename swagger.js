const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Filmes',
      version: '1.0.0',
      description: 'API para gerenciamento de filmes',
    },
    components: {
      schemas: {
        Filme: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID do filme',
            },
            titulo: {
              type: 'string',
              description: 'Título do filme',
              example: 'Título do filme',
            },
            ano: {
              type: 'integer',
              description: 'Ano de lançamento do filme',
              example: 2023,
            },
            genero: {
              type: 'string',
              description: 'Gênero do filme',
              example: 'Terror',
            },
            duracao: {
              type: 'string',
              description: 'Duração do filme',
              example: '130',
            },
            classificacao: {
              type: 'string',
              description: 'Classificação indicativa do filme',
              example: '18',
            },
            sinopse: {
              type: 'string',
              description: 'Sinopse do filme',
              example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            nota: {
              type: 'number',
              description: 'Nota do filme',
              example: 9.5,
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/movies.js', './dist/routes/movies.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;


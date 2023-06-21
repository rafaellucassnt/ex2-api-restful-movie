const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const moviesRouter = require('./routes/movies');
const swaggerSpec = require('../swagger');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Exercício 2 - Montagem da API RESTful com BD - Rafael Lucas - <br><br><a href="/api-docs">Documentação API</a>')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/filmes', moviesRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado!`);
});

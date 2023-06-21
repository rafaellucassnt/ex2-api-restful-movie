const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');

app.get('/', (req, res) => {
  res.send('Exercício 2 - Montagem da API RESTful com BD - Rafael Lucas ')
})

app.use(express.json());
app.use('/api/filmes', moviesRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado!`);
});

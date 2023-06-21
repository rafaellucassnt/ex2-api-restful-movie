const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');

app.use(express.json());
app.use('/api/filmes', moviesRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado!`);
});

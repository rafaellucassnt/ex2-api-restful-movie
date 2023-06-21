const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Exercício 2 - Montagem da API RESTful com BD - Rafael Lucas dos Santos')
})

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`)
})
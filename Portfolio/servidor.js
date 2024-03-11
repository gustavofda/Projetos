const express = require('express');
const app = express();
const port = 3000;

// Configurando uma rota básica
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu portfólio!');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});

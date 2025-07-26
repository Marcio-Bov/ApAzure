// Importa o módulo express
const express = require('express');

// Cria uma instância do aplicativo express
const app = express();

// Define a porta em que o servidor irá escutar
const port = 3000;

// Define uma rota GET para a URL raiz ('/')
app.get('/', (req, res) => {
  // Envia a string "Olá, Mundo!" como resposta
  res.send('Olá, Mundo!');
});

// Inicia o servidor e o faz escutar na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
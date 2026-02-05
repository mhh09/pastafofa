const express = require('express');
const path = require('path');

const app = express();

// servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// exporta o app para o Vercel
module.exports = app;

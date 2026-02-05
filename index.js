const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// habilita CORS
app.use(cors());

// serve arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// rota principal devolve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

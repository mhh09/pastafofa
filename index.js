const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORTA = 3000;

// Rota calculadora com 3 parâmetros (n1, n2, operação)
app.get('/calcular/:n1/:n2/:operacao', (req, res) => {
  const n1 = Number(req.params.n1);
  const n2 = Number(req.params.n2);
  const operacao = req.params.operacao.toLowerCase();

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ erro: "Parâmetros inválidos" });
  }

  if (operacao === "somado") {
    return res.json({ resultado: n1 + n2, operacao: "Somado" });
  } else if (operacao === "subtraido") {
    return res.json({ resultado: n1 - n2, operacao: "Subtraído" });
  } else if (operacao === "multiplicado") {
    return res.json({ resultado: n1 * n2, operacao: "Multiplicado" });
  } else if (operacao === "dividido") {
    if (n2 === 0) {
      return res.status(400).json({ erro: "Divisão por zero não permitida" });
    }
    return res.json({ resultado: n1 / n2, operacao: "Dividido" });
  } else {
    return res.status(400).json({ erro: "Operação inválida. Use somado, subtraido, multiplicado ou dividido." });
  }
});

app.listen(PORTA, () => {
  console.log(`Servidor iniciado com sucesso na porta ${PORTA}`);
});

const express = require("express");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));

// Server de exemplo para verificar se está funcionando corretamente
let serverFile = {
  menssage: "Server Funcionando"
};

// Simple GET
app.get("/", (req, res) => {
  return res.json(serverFile);
});

app.listen(3000, () => {
  console.log("Servidor UP");
});

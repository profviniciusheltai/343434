// Importação do express.js
const express = require("express");

// Tratativa das rotas com Express - Router
const router = express.Router()

// Importando e configurando o dotenv:
require('dotenv').config({path:'variables.env'});

// Cria a rota raiz "/"
router.get('/',(req, res) =>{
    res.send("Ola Mundo... UNICSUL");
});

router.get('/'+process.env.NOME_ROTA,(req, res) =>{
    res.send("Pagina da BANANA") 
});

// Invocando o uso do app com "/"
const app = express();
app.use('/', router);

// Exportando o app
module.exports = app;
  
    
 
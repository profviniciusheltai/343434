// Importando o app do arquivo app.js
const app = require('./app');

// Importando e configurando o dotenv:
require('dotenv').config({path:'variables.env'});

// Configurando o servidor:
app.set('port',process.env.PORT || 7777)
const server = app.listen(app.get('port'),() =>{
    console.log("Servidor Rodando na porta: "+server.address().port);
}); 

   
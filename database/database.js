const sequelize = require('sequelize');

const connection = new sequelize(
    'dbguiasperguntas',         // banco de dados a conectar
    'root',                     // usuário do banco de dados
    '',                         // senha do usuário
    {                           // objetos do banco de dados
    host: 'localhost',          // aonde está o SGBD
    dialect: 'mysql'            // qual o banco de dados
});

module.exports = connection;
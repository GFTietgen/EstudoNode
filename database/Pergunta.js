const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('Perguntas', {
    titulo:{
        type: Sequelize.STRING,
        alllowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        alllowNull: false
    }
});

Pergunta
    .sync({force:false})
    .then(()=>{ console.log('Tabela Pergunta criada com sucesso') });

module.exports = Pergunta;
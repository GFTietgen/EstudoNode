const { text } = require('body-parser');
const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define("Respostas", {
    corpo: {
        type: Sequelize.TEXT,
        alllowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        alllowNull: false
    }
});

Resposta.sync({force:false});

module.exports = Resposta;
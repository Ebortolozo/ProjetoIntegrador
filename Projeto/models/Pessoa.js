const {
    DataTypes
} = require("sequelize");

const db = require("../db/conn");

//Tabela pessoa como id como chave principal

const Pessoa = db.define('Pessoa',{
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    tipoPessoa: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})


module.exports = Pessoa
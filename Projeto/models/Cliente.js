const {
    DataTypes
} = require("sequelize");

const db = require("../db/conn");

// Atributos: Nome, DataNascimento, E-mail, Telefone, CEP, Usuario e senha
//Tabela pessoa como id como chave principal

const Cliente = db.define('Cliente',{
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
    usuario: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

})


module.exports = Cliente
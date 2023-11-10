const {
    DataTypes, INTEGER
} = require("sequelize");

const db = require("../db/conn");

//Basicamente vamos criar(junto da Empresa) os planos mensal trimestral e anual(pra ficar bunito)

const Planos = db.define('Planos',{
    nomePlano: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Planos

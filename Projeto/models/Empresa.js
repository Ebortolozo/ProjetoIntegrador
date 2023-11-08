const {
    DataTypes, INTEGER
} = require("sequelize");

const db = require("../db/conn");

const User = require("../models/User")

const Empresa = db.define('Empresa',{
    nomeEmpresa: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    esporte: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING(300),
        allowNull: false,
    }
})

//Associações

User.hasMany(Empresa, {
    foreignKey: "id"
})
Empresa.belongsTo(User)

//export

module.exports = Empresa
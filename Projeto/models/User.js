const {
    DataTypes
} = require("sequelize");

const db = require("../db/conn");

const Pessoa = require("../models/Pessoa")

//Usuario vai criar o login e senha


const User = db.define('User',{
    login: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
});

// Associações
Pessoa.hasOne(User, {
    foreignKey: "id"
})
User.belongsTo(Pessoa)

//exportar
module.exports = User;
const {
    DataTypes, INTEGER
} = require("sequelize");

const db = require("../db/conn");

//Também iremos cadastrar os Esportes

const Esportes = db.define('Esportes',{
    nomeEsporte: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    imagemEsporte: {
        type: DataTypes.STRING(3000),
        allowNull: true
    }
})

module.exports = Esportes

const {
    DataTypes, INTEGER
} = require("sequelize");

const db = require("../db/conn");

const Cliente = require("../models/Cliente")
const Esporte = require("../models/Esportes")

//O cliente pode cadastrar o Evento(Pelada/seiláoq) tendo como FK o nome do esporte e o id do cliente que criou
//Atributos: NomeEvento, Horario, Data, Quant, Preço(Pode ser Null), 

const Evento = db.define('Evento',{
    nomeEvento: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    //Não sei o type ainda
    horario: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    dataEvento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quantPessoas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
})

//Associações

Cliente.hasMany(Evento, {
    foreignKey: "id"
})
Evento.belongsTo(Cliente)

Cliente.hasOne(Esporte, {
    foreignKey: "id"
})


//export

module.exports = Evento
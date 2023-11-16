const {
    DataTypes, INTEGER
} = require("sequelize");

const db = require("../db/conn");

const Cliente = require("../models/Cliente")
const Esporte = require("../models/Esportes")

//O cliente pode cadastrar o Evento(Pelada/seiláoq) tendo como FK o nome do esporte e o id do cliente que criou
//Atributos: NomeEvento, Horario, Data, Quant, Preço(Pode ser Null), 

const Evento = db.define('Evento', {
    nomeEvento: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
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
});

// Associações corrigidas
Evento.belongsTo(Cliente, { foreignKey: "clienteId" }); // Um evento pertence a um cliente
Cliente.hasMany(Evento, { foreignKey: "clienteId" }); // Um cliente pode ter muitos eventos

Evento.belongsTo(Esporte, { foreignKey: "esporteId" }); // Um evento pertence a um esporte
Esporte.hasMany(Evento, { foreignKey: "esporteId" }); // Um esporte pode ter muitos eventos

module.exports = Evento;

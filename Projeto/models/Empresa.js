const {
    DataTypes, INTEGER
} = require("sequelize");

const db = require("../db/conn");


const Esporte = require("../models/Esportes")

//Quem irá cadastrar as emprasa será nós mesmo por isso não vai ter interferencia de usuarios burros...
//Atributos : NomeEmpresa, Esporte(FK), Horarios, Telefone, Localização, Descrição, Planos(FK)

const Empresa = db.define('Empresa', {
    nomeEmpresa: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    horarios: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localizacao: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    preco: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(500),
        allowNull: false,
    }
});

// Associações
Empresa.belongsTo(Esporte, { foreignKey: "id" }); 
Esporte.hasMany(Empresa); 


module.exports = Empresa;

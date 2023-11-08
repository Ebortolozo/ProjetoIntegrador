const {
    Sequelize
} = require('sequelize')

//Script para conexão com o Banco de dados Mysql

const sequelize = new Sequelize('projetointegrador', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log("Conectamos com Sucesso!")
} catch (err) {
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize
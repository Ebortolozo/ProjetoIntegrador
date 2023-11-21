const Empresa = require("../models/Empresa")
const Esportes = require("../models/Esportes")

module.exports = class SiteController {
    static async homepage(req, res) {
        const empresa = await Empresa.findAll({
            // include: Esportes,
            // plain: true
        })

        const empre = empresa.map((results) => results.dataValues)
        // console.log(typeof empre)



        return res.render('Site/homepage', {empre})
    }
    
    static evento(req, res) {
        const esportes = ["Futebol", "Basquete", "Críquete", "Tênis", "Futebol Americano",
        "Beisebol", "Rugby", "Golfe", "Atletismo", "Natação",
        "Ciclismo", "Hóquei no Gelo", "Boxe", "Artes Marciais Mistas",
        "Handebol", "Vôlei", "Badminton", "Esqui Alpino", "Snowboard",
        "Patinação Artística", "Surf", "Tênis de Mesa", "Softbol",
        "Levantamento de Peso", "Escalada", "Wrestling", "Ginástica Artística",
        "Judô", "Esgrima", "Polo Aquático", "Canoagem", "Remo",
        "Tiro com Arco", "Skate", "Boliche", "Triatlo", "Hóquei em Campo",
        "Fórmula 1", "Esportes a Motor", "Vela", "Patinação de Velocidade",
        "Biatlo", "Pentatlo Moderno", "Squash", "Lacrosse", "Tiro Esportivo",
        "Bandy", "Luge", "Curling", "Sincronizada"]
        return res.render('Site/criarPelada', {esportes})
    }
}
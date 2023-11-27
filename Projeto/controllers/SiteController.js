const Empresa = require("../models/Empresa")
const Esportes = require("../models/Esportes")

module.exports = class SiteController {
    static async homepage(req, res) {
        const empresa = await Empresa.findAll({
            // include: Esportes,
            // plain: true
        })

        const empre = empresa.map((results) => results.dataValues)
        
        // console.log(empre)

        const ArrayEmpresa = []

        class empresaHomepage {
            constructor(id, nomeEmpresa, nomeEsporte, imagemEsporte) {
                this.id = id,
                this.nomeEmpresa = nomeEmpresa,
                this.nomeEsporte = nomeEsporte,
                this.imagemEsporte = imagemEsporte
            }
        }



        //Puta merda de codigo deu certo kkkkkkkkkkkkkkkkkkk
        for(var chave in empre) {
            var idEmpresa = empre[chave].id
            var nomeEmpresa = empre[chave].nomeEmpresa
            var idEsporte = empre[chave].EsporteId
            var Esporte = await Esportes.findOne({
                where: {id: idEsporte}
            })
            var nomeEsporte = Esporte.nomeEsporte
            var imagemEsporte = Esporte.imagemEsporte
            // console.log(empre[chave])

            let empresaArray = new empresaHomepage(idEmpresa, nomeEmpresa, nomeEsporte, imagemEsporte)

            // console.log(empresaArray)
            

            ArrayEmpresa.push(empresaArray)
            
        }

        // Testar o que está sendo mandado para o front
        // console.log(ArrayEmpresa) 
        



        return res.render('Site/homepage', {ArrayEmpresa})
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

    static showEmpresa = async (req, res) => {
        try {
            const empresaId = req.params.id;
    
            // Use o método `findByPk` para buscar por chave primária
            const empresa = await Empresa.findByPk(empresaId, {
                raw: true
            });
    
            if (!empresa) {
                // Lida com o caso em que a empresa não é encontrada
                return res.status(404).send('Empresa não encontrada');
            }

            const esporte = await Esportes.findByPk(empresa.EsporteId, {
                raw: true
            })
            console.log(esporte)
    
            // console.log(empresa)
            res.render('Site/empresa', {empresa, esporte});
        } catch (error) {
            // Lida com erros durante a consulta ou renderização
            console.error('Erro ao buscar empresa:', error);
            res.status(500).send('Erro interno do servidor');
        }
    };
    
}
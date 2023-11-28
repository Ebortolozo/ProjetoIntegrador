const Empresa = require("../models/Empresa")
const Esportes = require("../models/Esportes")
const Evento = require("../models/Evento")
const {
    sequelize, literal, DataTypes
} = require('sequelize')

module.exports = class SiteController {
    static async eventoPost(req, res) {
        // console.log(req.body)
        const {nome, horario, data, quantidadePessoas, preco, esporte} = req.body

        const user = req.session.userid
        console.log(user)

        // console.log(nome, horario, data, quantidadePessoas, preco, esporte);

        const esporteId = await Esportes.findOne({
            where: {nomeEsporte: esporte},
            raw: true
        })

        class Eventos {
            constructor(nome, horario, data, quantidadePessoas, preco){
                this.nomeEvento = nome,
                this.horario = horario,
                this.dataEvento = data,
                this.quantPessoas = quantidadePessoas,
                this.preco = preco,
                this.esporteId = esporteId.id
                this.clienteId =  user
            }
        }

        const eventoCriar = new Eventos(nome, horario, data, quantidadePessoas, preco)
        console.log(eventoCriar) //Teste

        try {
            await Evento.create(eventoCriar)
            // console.log("Criado com sucesso")
        } catch (err) {
            console.log(`Não foi possivel criar porque: ${err}`)
        }

        return res.redirect('/home')
    }
    
    
    static async homepage(req, res) {
        
        const empresa = await Empresa.findAll({
            // include: Esportes,
            // plain: true
        })

        const evento = await Evento.findAll()

        const empre = empresa.map((results) => results.dataValues)
        const event = evento.map((results) => results.dataValues)
        
        // console.log(empre)
        // console.log(event)

        const ArrayEvento = []
        const ArrayEmpresa = []

        class empresaHomepage {
            constructor(id, nomeEmpresa, nomeEsporte, imagemEsporte) {
                this.id = id,
                this.nomeEmpresa = nomeEmpresa,
                this.nomeEsporte = nomeEsporte,
                this.imagemEsporte = imagemEsporte
            }
        }

        class eventoHomepage {
            constructor(id, nomeEvento, nomeEsporte, imagemEsporte){
                this.id = id,
                this.nomeEvento = nomeEvento,
                this.nomeEsporte = nomeEsporte,
                this.imagemEsporte = imagemEsporte
            }
        }

        for(var key in event) {
            var id = event[key].id
            var nomeEvento = event[key].nomeEvento
            var idEsporte = event[key].esporteId
            var Esporte = await Esportes.findOne({
                where: {id: idEsporte}
            })
            var nomeEsporte = Esporte.nomeEsporte
            var imagemEsporte = Esporte.imagemEsporte


            let eventoArray = new eventoHomepage(id, nomeEvento, nomeEsporte, imagemEsporte)

            ArrayEvento.push(eventoArray)
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
        // console.log(ArrayEvento)
        



        return res.render('Site/homepage', {ArrayEmpresa, ArrayEvento} )
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

    static showEvento = async (req, res) => {
        try {
            const eventoId = req.params.id;
    
            // Use o método `findByPk` para buscar por chave primária
            const evento = await Evento.findByPk(eventoId, {
                raw: true
            });
    
            if (!evento) {
                // Lida com o caso em que a empresa não é encontrada
                return res.status(404).send('Empresa não encontrada');
            }

            const esporte = await Esportes.findByPk(evento.esporteId, {
                raw: true
            })
            // console.log(esporte)
    
            // console.log(empresa)
            res.render('Site/evento', {evento, esporte});
        } catch (error) {
            // Lida com erros durante a consulta ou renderização
            console.error('Erro ao buscar empresa:', error);
            res.status(500).send('Erro interno do servidor');
        }
    }

    static diminuir = async (req, res) => {


        

        const {eventoId, esporteId} = req.body
        //console.log(eventoId, esporteId)

        var quant = await Evento.findByPk(eventoId, {
            raw: true
        })
        quant = quant.quantPessoas
        console.log(quant)

        if(quant > 0) {
            await Evento.update(
                { quantPessoas: literal('quantPessoas - 1') },
                { where: { id: eventoId } }
                
            );
            req.flash('message', 'Reservado :)');
        } else {
            req.flash('message', 'Esgotado :(');
        }
        
        return res.redirect(`evento/${eventoId}`);


        // return res.redirect(`evento/${eventoId}`)
    }
    
}
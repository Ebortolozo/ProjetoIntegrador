const Esporte = require("../models/Esportes");
const Empresa = require("../models/Empresa");

module.exports = class InserirCoisas {
    static async inserirEsportes() {
        try {
            const esportesMaisJogados = [
                "Futebol", "Basquete", "Críquete", "Tênis", "Futebol Americano",
                "Beisebol", "Rugby", "Golfe", "Atletismo", "Natação",
                "Ciclismo", "Hóquei no Gelo", "Boxe", "Artes Marciais Mistas",
                "Handebol", "Vôlei", "Badminton", "Esqui Alpino", "Snowboard",
                "Patinação Artística", "Surf", "Tênis de Mesa", "Softbol",
                "Levantamento de Peso", "Escalada", "Wrestling", "Ginástica Artística",
                "Judô", "Esgrima", "Polo Aquático", "Canoagem", "Remo",
                "Tiro com Arco", "Skate", "Boliche", "Triatlo", "Hóquei em Campo",
                "Fórmula 1", "Esportes a Motor", "Vela", "Patinação de Velocidade",
                "Biatlo", "Pentatlo Moderno", "Squash", "Lacrosse", "Tiro Esportivo",
                "Bandy", "Luge", "Curling", "Sincronizada"
            ];

            // Inserir esportes com base na lista
            for (const esporte of esportesMaisJogados) {
                await Esporte.create({
                    nomeEsporte: esporte
                });
            }

            console.log("Esportes inseridos com sucesso!");
        } catch (error) {
            console.error("Erro ao inserir esportes:", error.message);
        }
    }

    static async inserirEmpresas() {
        async function criarEmpresa(nome, horarios, localizacao, telefone, descricao, preco, esporteId) {
            await Empresa.create({
                nomeEmpresa: nome,
                horarios: horarios,
                localizacao: localizacao,
                telefone: telefone,
                descricao: descricao,
                preco: preco,
                esporteId : esporteId
            });
        }
        
        // Criação das empresas
        try {
            await criarEmpresa("Futebol Club", "Seg a Sex das 18:00 às 22:00", "Rua das Quadras, 123",
            "(123) 456-7890", "Uma comunidade apaixonada pelo futebol, onde jogadores de todas as idades se reúnem para partidas emocionantes. Oferecemos instalações de última geração, treinadores especializados e um ambiente amigável para os amantes do esporte.", "Mensal: $50, Trimestral: $140, Anual: $500", 1);
        
            await criarEmpresa("Basquete Arena", "Seg a Sex das 18:00 às 22:00", "Avenida das Cestas, 456",
            "(987) 654-3210", "O Basquete Arena é mais do que um lugar para praticar basquete; é um centro de excelência para jogadores de todas as habilidades. Nossas instalações incluem quadras de última geração, programas de treinamento personalizados e uma comunidade apaixonada.", "Mensal: $40, Trimestral: $110, Anual: $400", 2);
        
            await criarEmpresa("Críquete Palace", "Seg a Sex das 18:00 às 22:00", "Praça dos Wickets, 789",
            "(111) 222-3333", "O Críquete Palace é um refúgio para os entusiastas do críquete. Nossas instalações impecáveis proporcionam uma experiência única, com torneios emocionantes, treinadores especializados e uma atmosfera vibrante.", "Mensal: $55, Trimestral: $150, Anual: $550", 3);
        
            await criarEmpresa("Tênis Club", "Seg a Sex das 18:00 às 22:00", "Travessa das Raquetes, 234",
            "(444) 555-6666", "O Tênis Club oferece uma experiência incomparável para os amantes do tênis. Com quadras de alta qualidade, programas de treinamento personalizados e eventos sociais, estamos comprometidos em promover o espírito esportivo e a camaradagem entre nossos membros.", "Mensal: $60, Trimestral: $165, Anual: $600", 4);
        
            await criarEmpresa("Futebol Americano Arena", "Seg a Sex das 18:00 às 22:00", "Rua dos Touchdowns, 567",
            "(777) 888-9999", "A Futebol Americano Arena é o local ideal para os aficionados por futebol americano. Com instalações de primeira linha, treinadores especializados e eventos emocionantes, proporcionamos uma experiência única para todos os fãs deste esporte eletrizante.", "Mensal: $65, Trimestral: $180, Anual: $650", 5);
        
            await criarEmpresa("Golfe Paradise", "Seg a Sex das 18:00 às 22:00", "Alameda dos Greens, 789",
            "(555) 333-2222", "O Golfe Paradise é um paraíso para os amantes do golfe. Nossos campos meticulosamente cuidados, instrutores experientes e um ambiente relaxante tornam o golfe uma experiência verdadeiramente gratificante para todos os níveis de habilidade.", "Mensal: $70, Trimestral: $195, Anual: $700", 8);
        
            await criarEmpresa("Rugby Legends", "Seg a Sex das 18:00 às 22:00", "Rua das Scrum, 432",
            "(999) 111-0000", "No Rugby Legends, celebramos a paixão e a tradição do rugby. Oferecemos instalações de qualidade, programas de desenvolvimento e uma comunidade unida de jogadores que compartilham a paixão por esse esporte robusto e emocionante.", "Mensal: $50, Trimestral: $140, Anual: $500", 7);
        
            await criarEmpresa("Natação Oasis", "Seg a Sex das 18:00 às 22:00", "Avenida das Piscinas, 876",
            "(876) 543-2109", "A Natação Oasis é mais do que uma piscina; é um refúgio para entusiastas da natação. Com piscinas de última geração, aulas especializadas e um ambiente descontraído, promovemos a saúde, a forma física e a diversão aquática.", "Mensal: $35, Trimestral: $95, Anual: $350", 10);
        
            await criarEmpresa("Ciclismo Adventure", "Seg a Sex das 18:00 às 22:00", "Ciclovia da Aventura, 345",
            "(321) 654-9876", "O Ciclismo Adventure é o ponto de encontro para os amantes do ciclismo. Oferecemos trilhas emocionantes, serviços de manutenção de bicicletas e eventos empolgantes para ciclistas de todas as idades e habilidades.", "Mensal: $30, Trimestral: $80, Anual: $300", 11);
        
            await criarEmpresa("Hóquei no Gelo Glacial", "Seg a Sex das 18:00 às 22:00", "Rua do Gelo, 876",
            "(444) 777-8888", "O Hóquei no Gelo Glacial é o local perfeito para os entusiastas do hóquei. Com pistas de gelo de alta qualidade, treinadores especializados e torneios emocionantes, proporcionamos uma experiência única para todos os amantes do hóquei no gelo.", "Mensal: $60, Trimestral: $165, Anual: $600", 12);
        } catch (err) {
            console.log(`Ocorreu um erro: ${err}`)
        }
    }
};

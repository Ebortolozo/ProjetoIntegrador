//Teste
const teste = [
    {
      id: 1,
      nomeEmpresa: 'Futebol Club',
      horarios: 'Seg a Sex das 18:00 às 22:00',
      localizacao: 'Rua das Quadras, 123',
      telefone: '(123) 456-7890',
      preco: 'Mensal: $50, Trimestral: $140, Anual: $500',
      descricao: 'Uma comunidade apaixonada pelo futebol, onde jogadores de todas as idades se reúnem para partidas emocionantes. Oferecemos instalações de última geração, treinadores especializados e um ambiente amigável para os amantes  do esporte.',
      EsporteId: 1
    },
    {
      id: 2,
      nomeEmpresa: 'Basquete Arena',
      horarios: 'Seg a Sex das 18:00 às 22:00',
      localizacao: 'Avenida das Cestas, 456',
      telefone: '(987) 654-3210',
      preco: 'Mensal: $40, Trimestral: $110, Anual: $400',
      descricao: 'O Basquete Arena é mais do que um lugar para praticar basquete; é um centro de excelência para jogadores de todas as habilidades. Nossas instalações incluem quadras de última geração, programas de treinamento personalizados e uma comunidade apaixonada.',
      EsporteId: 2
    },
    {
      id: 3,
      nomeEmpresa: 'Críquete Palace',
      horarios: 'Seg a Sex das 18:00 às 22:00',
      localizacao: 'Praça dos Wickets, 789',
      telefone: '(111) 222-3333',
      preco: 'Mensal: $55, Trimestral: $150, Anual: $550',
      descricao: 'O Críquete Palace é um refúgio para os entusiastas do críquete. Nossas instalações impecáveis proporcionam uma experiência única, com torneios emocionantes, treinadores especializados e uma atmosfera vibrante.',
      EsporteId: 3
    },
  ];
  
  console.log(typeof teste)

  const array = Object.keys(teste).map(chave => teste[chave])
  console.log(typeof array)
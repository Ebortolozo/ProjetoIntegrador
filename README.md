# SportFinder

SportFinder é uma plataforma web que conecta entusiastas de esportes a academias, escolinhas e eventos esportivos no Espírito Santo.

## Funcionalidades

- **Cadastro de Empresas Esportivas:**
  - Donos de academias, escolinhas de esportes, etc., podem entrar em contato conosco para se cadastrarem e exibirem informações sobre sua empresa. Os detalhes incluem nome, esporte oferecido, horários, telefone, localização, descrição e planos disponíveis.

- **Cadastro de Usuários:**
  - Os usuários podem se cadastrar no SportFinder fornecendo informações como nome, data de nascimento, e-mail, telefone, CEP, nome de usuário e senha.

- **Exploração de Empresas:**
  - Os usuários podem navegar pela homepage para encontrar informações sobre as empresas cadastradas, incluindo detalhes sobre os serviços oferecidos e os planos disponíveis.

- **Cadastro de Eventos:**
  - Os usuários podem cadastrar eventos esportivos, como partidas de futebol, jogos de vôlei, etc., fornecendo detalhes como nome, horário, data, quantidade máxima de participantes, preço (se aplicável) e esporte.

- **Inscrição em Eventos:**
  - Os usuários podem se inscrever em eventos disponíveis, diminuindo a quantidade máxima de participantes.

- **Gerenciamento de Eventos:**
  - Os usuários têm acesso a uma seção onde podem visualizar os eventos que criaram, os eventos em que participaram e os eventos futuros em que estão inscritos.

## Instalação e Uso

1. Clone este repositório: `git clone https://github.com/Ebortolozo/ProjetoIntegrador.git`
2. Navegue até o diretório do projeto: `cd ProjetoIntegrador`
3. Instale as dependências: `npm install`
4. Certifique-se de ter o XAMPP instalado e o servidor MySQL em execução.
5. Abra o XAMPP e inicie o serviço MySQL.
6. Abra o arquivo `db/conn.js` e verifique se as configurações de conexão do Sequelize estão corretas. Aqui está um exemplo de configuração:

```javascript
const { Sequelize } = require('sequelize');

// Script para conexão com o Banco de dados Mysql
const sequelize = new Sequelize('projetointegrador', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log("Conectamos com Sucesso!");
} catch (err) {
    console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;

````
5. Inicie o servidor: `npm start`
6. Abra o navegador e acesse `http://localhost:3000`

## Contribuição

Sinta-se à vontade para contribuir para o desenvolvimento do SportFinder. Se encontrar problemas ou tiver sugestões, abra uma issue ou envie um pull request.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

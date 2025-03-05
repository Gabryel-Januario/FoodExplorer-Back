<h1 align="center">
  <a href="#">
    Food Explorer API
  </a>
</h1>



<p align="center">
  <a href="#-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-documenta%C3%A7%C3%A3o-da-api">Documentação</a>

</p><br>

### Deploy local

1. Faça o clone do projeto em uma pasta local através do prompt de terminal:
```bash
git clone https://github.com/Gabryel-Januario/FoodExplorer-Back
```
2. Instale as dependencias do projeto:
```bash
npm install
```
3. Configure as variáveis de ambiente criando o arquivo `.env` (use o arquivo `.env.example` como modelo) incluindo as variáveis abaixo:
```js
PORT=3000
AUTH_SECRET=
```
4. Execute as `migrations`
```bash
npm run migrate
```
5. execute as `seeds`
```bash
npm run seed
```
6. Execute o servidor backend da aplicação:
```bash
npm start
```

## 🦾 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [Express.js](http://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [SQLite](https://www.npmjs.com/package/sqlite)
- [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken)
- [Multer](https://www.npmjs.com/package/multer)
- [Knex.js](https://www.npmjs.com/package/knex)
- [BCrypt.js](https://www.npmjs.com/package/bcryptjs)

## 💻 Projeto

Este é o backend do projeto **Food Explorer**, criado como parte do desafio final do treinamento fullstack **Explorer** da [@Rockeseat](https://www.rocketseat.com.br/) para avaliar os conhecimentos adquiridos.

## <h1 align="center">🔧 Recursos</h1>

A aplicação possui duas personas:

- Cliente:

  - Mostrar todos os pratos
  - Mostrar um prato especifico
  - Pesquisar por um prato ou ingrediente
  - Adicionar ao carrinho os pedidos
  - Fazer um pedido
  - Adicionar prato aos favoritos
  - Acessar todos os favoritos
  - Acessar histórico de pedidos
  - Acessar status do pedido
  - Atualizar informações da conta
  - Acessar página com informações sobre o restaurante
    <br/>
    <br/>

- Administrador:

  - Mostrar todos os pratos
  - Mostrar um prato especifico
  - Pesquisar por um prato ou ingrediente
  - Acessar todos os pedidos
  - Acessar status do pedido
  - Atualizar status de pedidos
  - Atualizar informações da conta
  - Acessar página com informações sobre o restaurante
  - Cadastrar um novo prato
  - Atualizar um prato
  - Deletar um prato
  - Atualizar um pedido
    <br/>
    <br/>


---
  

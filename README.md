# GithubStars

No Github você pode seguir repositórios de projetos que você achou interessantes e acompanhar o desenvolvimento no seu feed de notícias.

Estrelar um repositório torna mais fácil encontrar novamente mais tarde. Você pode ver todos os repositórios que você estrelou indo para sua página de estrelas.

O que não tem no Github, com menos do que 2 cliques, é saber quais são todos os repositórios que um determinado usuário estrelou.

### Você deve fazer um app com o seguinte funcionamento:

1. Permita que o usuário busque por ~~nome ou~~ apelido de outro usuário no Github. Match tem de ser exato do ~~nome ou~~ apelido
2. Liste os repos estrelados do usuário buscado
3. Exiba na lateral da listagem o nickname, avatar, bio, localização, email e URL do usuário buscado
4. Permita que o usuário estrele os repos listados do usuário buscado

### A app também deve:

1. Ser uma app SPA
2. Permita que o usuário faça o fluxo de autenticação via "[personal token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)" do github para conseguir estrelar os repositórios
3. Usar a API GraphQL do [Github](https://developer.github.com/v4/)
4. Seguir [essa spec](https://www.figma.com/file/DTacdAvhVLkaZUCU0XotKz2n/Github-stars) de interface

## Tecnologias utilizadas

> Esse projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app).

- [@apollo/react-hooks](https://www.apollographql.com/docs/) Camada de comunicação entre o client e o back-end
- [styled-components](https://www.styled-components.com/) Biblioteca para utilização de CSS-in-JS
- [polished](https://polished.js.org/) Utilização de helpers de estilo para CSS-in-JS
- [react-toast-notifications](https://jossmac.github.io/react-toast-notifications/) Criação de alertas Toast
- [ESlint](https://eslint.org/) Analise estatica de estilo de código, foram utilizadas as regras do [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [prettier](https://prettier.io/) Formatação automatica do código baseado nas regras do ESlint
- [husky](https://github.com/typicode/husky) Criação de git hooks 🐶

## Execução

Em um ambiente `node ^12.8.0` basta instalar as dependências do projeto:

```bash
# Utilizando NPM
npm install

# Utilizadno yarn
yarn
```

e executar o servidor de desenvolvimento:

```bash
# Utilizando NPM
npm start

# Utilizadno yarn
yarn start
```

## Instruções para testes

Para executar o suite de testes, basta executar o comando:

```bash
# Utilizando NPM
npm start

# Utilizadno yarn
yarn start
```

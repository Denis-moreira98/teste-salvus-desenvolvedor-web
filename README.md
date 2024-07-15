# Salvus - Desafio Técnico Desenvolvedor Web

### Backend

Desenvolvimento de uma API RESTful utilizando Node.js e Express para gerenciar operações CRUD (Create, Read, Update, Delete) em uma entidade chamada "Produtos". Cada produto é definido pelos campos: id, nome, descrição, preço e data de criação.

### Requisitos Implementados:

-  Utilização do Express para criação das rotas da API.
-  Integração do banco de dados MySQL juntamente com o Sequelize ORM para armazenamento e manipulação dos dados.
-  Implementação de validação de dados na criação e atualização de produtos.
-  Adoção de tratamento de erros robusto para garantir a estabilidade da aplicação.

### Arquitetura e Princípios Adotados:

A API segue os padrões de arquitetura MVC para uma organização estruturada e manutenível do código, além de adotar os princípios RESTful para oferecer uma interface consistente e previsível para interações com os recursos.

### Frontend com Reactjs

Desenvolvimento de uma aplicação frontend utilizando React.js para consumir a API desenvolvida. A aplicação permite que o usuário visualize a lista de produtos, adicione um novo produto, atualize um produto existente e delete um produto.

### Requisitos Implementados:

-  Gerenciamento de Estado com Hooks: Utilização dos hooks do React para gerenciar o estado da aplicação, incluindo o uso de `useContext` para realizar requisições e compartilhar informações dos produtos no estado global.
-  Implementação de formulários para adicionar e atualizar produtos com validação de campos, utilizando `react-hook-form` com `zod.`
-  Adição de feedback visual para o usuário, como loading spinners, mensagens de sucesso/erro com `react-toast`.


## Para acessar a aplicação em produção

### Frontend

Acesse https://teste-salvus-desenvolvedor-web.vercel.app/

### Api do Backend

Acesse https://teste-salvus-desenvolvedor-web-production.up.railway.app/

## Como rodar localmente na sua máquina

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

-  [Node.js](https://nodejs.org/en/download/) (Versão 18 ou superior)
-  [NPM](https://www.npmjs.com/get-npm) ou [YARN](https://yarnpkg.com/getting-started/install)
-  [MySQL](https://dev.mysql.com/downloads/mysql/)

### Configuração do MySQL

Após instalar o MySQL, crie um banco de dados e guarde as informações de acesso.

## Como clonar o repositório

Para clonar o repositório, execute o seguinte comando no terminal:

```bash
git clone https://github.com/Denis-moreira98/teste-salvus-desenvolvedor-web.git
```

Depois de clonar o repositório, navegue até o diretório do projeto:

```bash
cd teste-salvus-desenvolvedor-web
```

```bash
cd backend
```

## Instalando as dependências </br>

Para instalar as dependências do projeto, execute:

```bash
npm install
```

ou

```bash
yarn add
```

Faça o mesmo para o Frontend:

```bash
cd ..
```

```bash
cd frontend
```

```bash
npm install
```

ou

```bash
yarn add
```

## Configurando as variáveis de ambiente

Tanto na pasta raiz do backend quanto no frontend, há um arquivo `.env.example.`

É necessario renomear o arquivo para `.env`

### Backend

Configure o arquivo de acordo com as informações do banco de dados que foi criado.

![Captura de tela 2024-07-13 204801](https://github.com/user-attachments/assets/621810dc-c229-4b14-8241-ac6a2a301d3d)

### Frontend

No frontend, apenas passe a URL da API.

![Captura de tela 2024-07-13 204826](https://github.com/user-attachments/assets/8c6da94f-bf99-4b08-be57-116e920d4fbb)

## Rodando a aplicação

Abra dois terminais, um em cada diretório (frontend e backend), e inicie o servidor em cada um.

### backend

```bash
npm run dev
```

ou

```bash
yarn run dev
```

### frontend

```bash
npm run dev
```

ou

```bash
yarn run dev
```

### Para acessar o Frontend, acesse essa URL no navegador

```bash
http://localhost:5173
```

### Para acessar Api utilize

```bash
http://localhost:3000
```

### Rotas da API

-  POST /products: Cria um novo produto. </br>
   ![image](https://github.com/user-attachments/assets/50e28d4a-8c6b-4c9e-ae3d-7d29917679e2)
-  GET /products: Retorna todos os produtos.
-  GET /products/:id: Retorna um produto específico pelo ID.
-  PUT /products/:id: Atualiza um produto específico pelo ID. </br>
   ![image](https://github.com/user-attachments/assets/50e28d4a-8c6b-4c9e-ae3d-7d29917679e2)
-  DELETE /products/:id: Deleta um produto específico pelo ID.

## Tecnologias Utilizadas

### Backend

-  Node.js com Express.js: Utilizei Node.js para o servidor devido à sua escalabilidade e processamento assíncrono. O Express.js facilitou a criação de rotas e middleware.

-  TypeScript: Adotei TypeScript para adicionar tipagem estática ao código JavaScript, aumentando a segurança e robustez.

-  MySQL com Sequelize: O MySQL foi escolhido como banco de dados relacional. O Sequelize ORM simplificou as operações de banco de dados com uma interface orientada a objetos.

-  Railway: A API foi implantada na plataforma Railway, que oferece deploy contínuo e serviços de banco de dados gerenciados.

### Frontend

-  React.js com TypeScript: Utilizei React.js para criar componentes reutilizáveis e TypeScript para tipagem estática e segurança do código.

-  Vite: Escolhi Vite como build tool para desenvolvimento rápido e eficiente.

-  Axios: A biblioteca Axios foi usada para requisições HTTP à API, facilitando a comunicação entre frontend e backend.

-  React Hook Form com Zod: Utilizei React Hook Form para gerenciamento de formulários e Zod para validação de dados.

-  React Toastify: Implementei React Toastify para exibir mensagens toast personalizadas, fornecendo feedback visual aos usuários.

-  Vercel: A aplicação frontend foi implantada na Vercel, que oferece deploy contínuo e escalabilidade eficiente.

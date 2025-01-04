<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center"><a href="http://nodejs.org" target="_blank">Framework javascript Nest.js</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

</p>

## Descrição

<p>Rest api para a Avance+, uma plataforma de estudos para concursos.</p>

## Setup Projeto

```bash
$ npm install
```

## Compile e rode o projeto

```bash
# Desenvolvimento
$ npm run start

# Modo assistido
$ npm run start:dev

# Modo produção
$ npm run start:prod
```

## URL Base

```bash
https://avance-mais-api.onrender.com
```

## Endpoints

Essa API possui os seguintes endpoints:

### **Status**

- **`GET /status`**  
  Retorna o status da API.

**Exemplo de Resposta**:

```json
{
  "status": "OK",
  "code": 200,
  "api": "RestApi Avance+",
  "mensagem": "API funcionando corretamente!",
  "versao": "1.0.0",
  "ambiente": "Desenvolvimento"
}
```

---

### **Usuários**

#### **`POST /usuarios`**

Adiciona um novo usuário.

**Requisição**:

- **Body (JSON)**:
  ```json
  {
    "nome": "Ricardo Barros",
    "email": "ricardo@example.com",
    "senha": "sua_senha123",
    "tipo": "Aluno" // Ou "Professor"
  }
  ```

**Exemplo de Resposta**:

```json
{
  "id": 6,
  "nome": "Ricardo Barros",
  "email": "ricardo@example.com",
  "senha": "sua_senha123",
  "biografia": "",
  "editadoEm": "2024-12-14T22:12:05.119Z",
  "tipo": "Aluno"
}
```

---

#### **`POST /usuarios/auth`**

Realiza a autenticação de um usuário.

**Requisição**:

- **Body (JSON)**:
  ```json
  {
    "email": "usuario@example.com",
    "senha": "sua_senha"
  }
  ```

**Exemplo de Resposta (sucesso)**:

```json
{
  "status": 200,
  "mensagem": "Autenticação bem-sucedida",
  "dados": {
    "token": "...token...",
    "usuario": {
      {
        "id": 6,
        "nome": "Ricardo Barros",
        "email": "ricardo@example.com",
        "senha": "sua_senha123",
        "biografia": "",
        "editadoEm": "2024-12-14T22:12:05.119Z",
        "tipo": "Aluno"
      }
    }
  }
}
```

**Exemplo de Resposta (erro)**:

```json
{
  "status": 404,
  "mensagem": "E-mail ou senha inválidos"
}
```

---

### **Postagens**

#### **`GET /posts`**

Retorna todas as postagens cadastradas.

**Exemplo de Resposta**:

```json
{
  "usuarios": [
    {
      "id": 1,
      "nome": "Paulo Ricardo",
      "email": "paulo@example.com",
      "biografia": "Desenvolvedor JS",
      "tipo": "Aluno"
    },
    {
      "id": 2,
      "nome": "Karol",
      "email": "karol@example.com",
      "biografia": "Desenvolvedor JS",
      "tipo": "Aluno"
    },
    {
      "id": 3,
      "nome": "Alan",
      "email": "alan@example.com",
      "biografia": "Desenvolvedor Vue.js",
      "tipo": "Aluno"
    },
    ...
  ],
  "posts": [
    {
      "titulo": "Aprendendo inglês",
      "descricao": "Um guia completo para iniciantes aprenderem inglês.",
      "tema": "Inglês",
      "link": "https://www.exemplo.com/curso-ingles"
    },
    {
      "titulo": "Aprendendo inglês",
      "descricao": "Um guia completo para iniciantes aprenderem inglês.",
      "tema": "Inglês",
      "link": "https://www.exemplo.com/curso-ingles"
    },
    {
      "titulo": "Aprendendo Javascript",
      "descricao": "Um guia completo para iniciantes aprenderem Javascript.",
      "tema": "Programação",
      "link": "https://www.exemplo.com/curso-programacao"
    },
    ...
  ]
}
```

---

#### **`POST /posts`**

Adiciona uma nova postagem.

**Requisição**:

- **Body (JSON)**:
  ```json
  {
    "idUsuario": 5,
    "titulo": "Aulão para ENEM 2025",
    "descricao": "Aprenda o essencial para o ENEM de 2025 em uma hora!",
    "tema": "ENEM",
    "link": "https://www.exemplo.com/aulao-enem"
  }
  ```

**Exemplo de Resposta**:

```json
{
  "id": 5,
  "idUsuario": 6,
  "titulo": "Aulão para ETEC 2025",
  "descricao": "Aprenda o essencial para o vestibular da ETEC de 2025 em uma hora!!!",
  "tema": "ETEC",
  "link": "https://www.exemplo.com/aulao-etec"
}
```

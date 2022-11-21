# Projeto PI 5o Semestre Senac

Parte do backend do Projeto Integrador do curso de sistemas para internet do Grupo 2, 

## Iniciando

### Pré-requisitos

Para rodar o projeto é necessario instalar a versão 16.17.0 ou maior do nodeJs, 

- [Nodejs 16.17.0](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

### Instalação

Após baixar o projeto, execute o comando

    npm i

após a instalação, crie um arquivo .env no diretorio raiz do projeto e copie a informação abaixo, alterando os valores conforme o seu cadastro.

    DBPASS=senhadopostgres
    DBUSER=usuariodopostgres
    DBNAME=nomedobancodedados
    DBHOST="127.0.0.1"

após isso, execute o comendo

    npx sequelize db:migrate

ele irá gerar as tabelas do banco de dados.

Agora só rodar o projeto com o comando
    
    npm run dev


## Links para testes, utilize o postman

    POST: http://localhost:3001/api/usuario
    body: {
        "nomeCompleto": "nome",
        "email": "email@email.com",
        "cpf": "12345678901",
        "nascimento": "1900-01-01 00:00:00.000 -0300",
        "telefone": "(11) 999 999 999",
        "senha": "dGVzdGUxMjM="
    }
---
    PUT: http://localhost:3001/api/usuario/{idUsuario}
    body: {
        "nomeCompleto": "nome",
        "email": "email@email.com",
        "cpf": "12345678901",
        "nascimento": "1900-01-01 00:00:00.000 -0300",
        "telefone": "(11) 999 999 999",
        "senha": "dGVzdGUxMjM="
    }
---
    GET: http://localhost:3001/api/agendamentos/{idAgendamento}
---
    POST: http://localhost:3001/api/agendamento
    body: {
        "idUsuario": "1",
        "nomeCliente": "nome",
        "dataAgendada": "2022-11-31 20:00:00.000 -0300",
        "horarioAgendado": "2022-11-31 20:00:00.000 -0300",
        "observacao": "",
        "ativo": true
    }
---
    PUT: http://localhost:3001/api/agendamento/{agendamentoId}
    body: {
        "idUsuario": "1",
        "nomeCliente": "nome",
        "dataAgendada": "2022-11-31 20:00:00.000 -0300",
        "horarioAgendado": "2022-11-31 20:00:00.000 -0300",
        "observacao": "",
        "ativo": true
    }
---
    DELETE: http://localhost:3001/api/agendamento/{agendamentoId}
---



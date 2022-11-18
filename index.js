const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const Sequelize = require('sequelize')
const compression = require('compression')

const app = express();
const port = 3001;
app.use(express.json());
app.use(compression());


const sequelize = new Sequelize(`postgres://postgres:${process.env.DBPASS}@localhost:5432/${process.env.DBNAME}`);

sequelize.authenticate()
.then(() => {
    console.log( 'Conection successfull!');
})
.catch(error => {
    console.error('Unable to connect to database: ', error);
});

const User = sequelize.define('usuario', {
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nascimento: {
        type: Sequelize.DATEONLY,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    ultimnoAcesso: {
        type: Sequelize.DATE,
    }
});

const Scheduling = sequelize.define('agendamento', {
    idUsuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeCliente : {
        type: Sequelize.STRING
    },
    dataAgendada : {
        type: Sequelize.DATEONLY
    },
    horarioAgendado : {
        type: Sequelize.DATE
    },
    observacao : {
        type: Sequelize.TEXT
    },
    ativo : {
        type: Sequelize.BOOLEAN
    },

})

User.sync({force: false})
Scheduling.sync({force: false})

app.listen(port, () => console.log(`rodando na porta ${port}`));

app.get('/agendamentos', async (req, res) => {
    const scheduling = await Scheduling.findAll({})
    res.json({scheduling})
})

app.get('/agendamentos/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { Op } = require("sequelize");
    const scheduling = await Scheduling.findAll({
      where: {
        [Op.and]: [
          { idUsuario: userId },
          { ativo: true }
        ]
      }
    });

    if(!res) {
        res.status(404).send(new Error('Não encontrado'))
    } else {
        res.json({scheduling})
    }
})
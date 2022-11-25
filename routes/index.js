const dotenv = require('dotenv');
dotenv.config();

const Router = require('express')
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Secretarie'))

router.get('/agendamentos/:userId', controllers.listaAgendamentos)

router.post('/agendamento', controllers.cadastraAgendamento)

router.delete('/agendamento/:schedulingId', controllers.removeAgendamento)

router.put('/agendamento/:schedulingId', controllers.alteraAgendamento)

router.post('/usuario', controllers.cadastraUsuario)

router.put('/usuario/:userId', controllers.alteraUsuario)

router.post('/auth', controllers.loginUsuario)

module.exports = router;
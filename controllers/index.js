const { cadastraUsuario,
    alteraUsuario,
    loginUsuario,
    validaUsuario,
    alteraSenha
 } = require('./userController');

 const { cadastraAgendamento,
    listaAgendamentos,
    removeAgendamento,
    alteraAgendamento} = require('./scheduleController');
    
module.exports = {
    cadastraUsuario,
    alteraUsuario,
    loginUsuario,
    validaUsuario,
    alteraSenha,
    cadastraAgendamento,
    listaAgendamentos,
    removeAgendamento,
    alteraAgendamento,
}
const sha256 = require('crypto-js/sha256');

const models = require('../database/models');

const cadastraUsuario = async (req, res) => {
    try {
        const {senha, email} = req.body;
        const reqDefault = req.body
        const cyptoSenha = {senha: String(sha256(senha))};
        const checkEmail = await models.Usuario.findOne({
            where: {
                email: email
        }})
        if (!checkEmail) {
            const user = await models.Usuario.create({...reqDefault, ...cyptoSenha});
            res.status(201).json({message: 'Usuário cadastrado com sucesso'});    
        } else {
            res.status(400).json({message: 'Usuário já cadastrado'})
        }
    } catch (error) {
        const user_obj = Object.keys(models.Usuario.rawAttributes)

        .filter(key => !models.Usuario.rawAttributes[key]._autoGenerated)
        .map(key => {
            return {
                field: models.Usuario.rawAttributes[key].fild,
                type: models.Usuario.rawAttributes[key].type.key,
                optional: models.Usuario.rawAttributes[key].allowNull !== false
            }
        })
        if (error instanceof models.Sequelize.DatabaseError) {
            res.status(400).json({
                error: error.message,
                expected_json: user_obj
            });
        } else {
            throw new Error('Server error')
        }
        
    }
}

const alteraSenha = async (req, res) => {
    const userId = req.params.userId;
    const { senha } = req.body;
    const cyptoSenha = {senha: String(sha256(senha))};

    const [ user_edit ] = await models.Usuario.update(
        cyptoSenha,
        {
            where: {
                id: userId
            }
        }
    );
    if (user_edit) {
        return res.status(200).json('Atualizado com sucesso');
    }
    return res.status(404).send(new Error('Usuario não encontrado'));
}

const alteraUsuario = async (req, res) => {
    const userId = req.params.userId;
    const reqDefault = req.body
    const { senha } = req.body;
    const cyptoSenha = {senha: String(sha256(senha))};

    const [ user_edit ] = await models.Usuario.update(
        {...reqDefault, ...cyptoSenha},
        {
            where: {
                id: userId
            }
        }
    );
    if (user_edit) {
        return res.status(200).json('Atualizado com sucesso');
    }
    return res.status(404).send(new Error('Usuario não encontrado'));
}

const loginUsuario = async (req, res, next) => {
    try {
        const { email, senha } = req.body;
        const user = await models.Usuario.findOne({
            where: {
                email: email            }
        });
        if(user) {
            const validPass = String(sha256(senha)) === user.senha;
            if(validPass) {
                return res.status(200).json({id: user.id, nomeCompleto: user.nomeCompleto});
            }
            return res.status(401).json('Usuário ou senha invalida');
        }

    } catch (error) {
        throw new Error('Server error')

    }
}

const validaUsuario = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await models.Usuario.findOne({
            where: {
                email: email            }
        });
        if(user) {
            return res.status(200).json({id: user.id});
        } else {
            return res.status(404).json('Usuário não encontrado');
        }
    } catch (error) {
        throw new Error('Server error')

    }
}

module.exports = {
    cadastraUsuario,
    alteraUsuario,
    loginUsuario,
    validaUsuario,
    alteraSenha
}
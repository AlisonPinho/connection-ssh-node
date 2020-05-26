const connection = require('../database/connection')

module.exports = {
    async create(req,res) {
        const { user, password } = req.body

        const validationUser = await connection('users')
            .where('user', user)
            .select('name','password')
            .first()


        console.log(validationUser)

        if (!validationUser) {
            return res.status(400).json({erro: 'Usuário não encontrado.'})  
        }

        if (validationUser.password != password) {
            return res.status(300).json({erro: 'Senha incorreta para o usuário.'})   
        }
        
        return res.status(201).json({"name": validationUser.name})

    }
}
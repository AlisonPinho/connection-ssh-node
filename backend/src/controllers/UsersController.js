const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    
    async index(req,res) {
        const users = await connection('users').select('*')
        
        return res.json({ users })
    },


     async create(req,res) {
        const { name, user, password, email } = req.body
    
        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('users').insert({
            id,
            name,
            user,
            password,
            email,
        })
        
        return res.json({ id })
    },


    async delete(req,res) {
        const { id } = req.params

        
        //const userAction = req.headers.user
        //const password = req.headers.password
        
        const user = await connection('users')
            .where('id', id)
            .select('name')
            .first()

            
        if(!user) {
            return res.status(401).json({erro: 'Usuário não encontrado.'})
        }   
        console.log(user)
        await connection('users').where('id', id).delete()
    

        return res.status(204).send()

    }
    
}
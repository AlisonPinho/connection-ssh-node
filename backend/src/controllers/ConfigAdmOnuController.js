const connection = require('../database/connection')

module.exports = {
    async index(req,res) {
        const scripts = await connection('script-onu').select('*')
        return res.json(scripts)
    },
    async create(req,res){

        const { name, vlan, ip, scriptBase ,scriptBaseComRb} = req.body
        const script = await connection('script-onu').insert({
            name,
            vlan,
            ip,
            'script-base':scriptBase,
            'script-base-com-rb':scriptBaseComRb
        })


        return res.status(201).json(name)
    }

    
}
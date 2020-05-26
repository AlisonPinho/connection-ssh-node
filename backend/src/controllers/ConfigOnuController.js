const connection = require('../database/connection')

module.exports = {
    async index(req,res) {
        const { name, interFace, sn} = req.body
        const config = await connection('script-onu')
            .where('name',name)
            .select('vlan','ip',{scriptBase:'script-base'})
            .first()


        const vlan = config.vlan    
        const countInterface = interFace.indexOf(':')
        const inter = interFace.slice(0,countInterface) //do primeiro número até o ':'
        const face = interFace.slice(countInterface + 1)
        const script = config.scriptBase
            .replace(/{sn}/gi,sn)
            .replace(/{interface}/gi,interFace)
            .replace(/{vlan}/gi,vlan)
            .replace('{inter}',inter)
            .replace('{face}',face)

        
        const linha = script.split(",");
        const scriptt = linha.join("\n");

        console.log(scriptt)
        return res.json({"script":scriptt})
    } 
}
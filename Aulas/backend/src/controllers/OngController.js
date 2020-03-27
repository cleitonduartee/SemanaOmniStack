const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const {name, email, whatsapp,city,uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');  //cria o Id da ong com 4 digito - converte em hexadecimal
    
       await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({id});
    },
    async list(request,response){
        
            const ongs = await connection('ongs').select('*');
        
            return response.json(ongs);
        
        
    }

}
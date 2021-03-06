const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        // console.log("ID: "+ong_id);
        
       let [id_caso] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({id_caso});

    },
    async list(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)  //Limita 5 registro por pagina
        .offset((page - 1) * 5)  //pula 5 registro por pagina EX: page=1 (1-1)= 0*5 = 0 não pula nenhum registro, mostra os 5 primeiros.
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
    ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents)
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        console.log(incidents)

        if(incidents.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted.' });
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

}
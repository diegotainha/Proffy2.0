import db from '../database/connection';
import { Request, Response } from 'express';

export default class Connectionontroller{
    async index(request: Request, response: Response){
        const totalConnections = await db('connections').count('* as total')

        const { total } = totalConnections[0]

        return response.status(201).json({total});
    }

    async create(request: Request, response: Response) {
        const trx = await db.transaction();
        try{
            const { user_id } = request.body

            await trx('connections').insert({
                user_id
            })
            trx.commit();

            return response.status(201).send();
        } catch(error){
            trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new connection.'
            });
        }
    }
}
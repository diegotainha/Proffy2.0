import db from '../database/connection';
import hourToMinutes from '../utils/hourToMinutes';
import { Request, Response } from 'express';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
    class_id: number
}

export default class ClassesController{
    async index(request: Request, response: Response){
        const filtres = request.query;

        const subject = filtres.subject as string;
        const week_day = filtres.week_day as string;
        const time = filtres.time as string;

        if (!filtres.week_day || !filtres.subject || !filtres.time){
            return response.status(400).json({
                error: "Missing filters to search classes."
            })
        }

        const timeInMinutes = hourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            // .join('class_schedule', 'class_schedule.class_id','=','classes.id') //nao utilizar, faz duplicar
            .select('classes.*', 'users.*')

        return response.json(classes);
    }

    async create(request: Request, response: Response) {
        const trx = await db.transaction();
        try{
            const {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost,
                schedule
            } = request.body;
    
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
    
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id: insertedUsersIds[0]
            });
    
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: hourToMinutes(scheduleItem.from),
                    to: hourToMinutes(scheduleItem.to),
                    class_id: insertedClassesIds[0]
                };
            });
    
            await trx('class_schedule').insert(classSchedule);
    
            await trx.commit();
    
            return response.status(201).send();
        } catch(err){
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class.'
            });
        }
    }
}
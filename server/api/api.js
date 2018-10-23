const db = require('./../db/index.js');
const mailer = require('./../mailer/index.js');
const { logger } = require('./../logger/index.js');

//Классы
const Response = require('./../models/Response.js');
const ApiError = require('./../models/ApiError.js');

const api = {

    //Проверяем, есть ли пользователь в БД, если да, то возвращаем его объект клиенту
    async checkUser(req, res) {
        const id = req.params.id;
        try {
            const dbConnection = await db.connect();
            let user = await dbConnection.db.collection('answers').findOne({_id: db.objectId(id)});
            await dbConnection.client.close();
            if(user) {
                res.json(new Response({
                    status: true,
                    data: user
                }));
            }
            else {
                throw new ApiError({
                    name: 'Check User Fail',
                    message: `Пользователь с id: ${id} не найдет в БД`,
                    code: 4000
                });
            }
        }
        catch(e) {
            logger.error(`${e.name} - ${e.message} - ${e.stack || e} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            res.json(new Response({
               status: false,
               error: e
           }));
        }
    },

    async addRecepient(req, res) {
        let user = req.body;
        user.isAnswered = false;
        try {
            let dbConnection = await db.connect();
            let userCheck = await dbConnection.db.collection('answers').find({email: user.email}).toArray();
            if(userCheck.length === 0) {
                let insertion = await dbConnection.db.collection('answers').insert(user);
                await dbConnection.client.close();
                await mailer.sendMail(insertion.ops[0]);
                res.json(new Response({
                    status: true
                }));
            }
            else {
                throw new ApiError({
                    name: 'Check User Fail',
                    message: `Пользователь с email: ${user.email} уже есть в БД. Вы не можете повторно добавить пользователя с одним и темже email!`,
                    code: 4001
                });
            }
        }
        catch(e) {
            logger.error(`${e.name} - ${e.message} - ${e.stack || e} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            res.json(new Response({
               status: false,
               error: e
           }));
        }
    },

    //Сохраняем ответ пользователя в БД
    async saveAnswer(req, res) {
        const {user, answer} = req.body;
        const id = db.objectId(user._id);
        try {
            const dbConnection = await db.connect();
            let update = await dbConnection.db.collection('answers').findOneAndUpdate({_id: id}, {$set: {
                    isAnswered: true,
                    answer
                }
            });
            if(update.lastErrorObject.updatedExisting) {
                res.json(new Response({
                    status: true
                }));
            }
            else {
                throw new Error('Ошибка обновления. Попробуйте позже');
            }
        }
        catch(e) {
            logger.error(`${e.name} - ${e.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            res.json(new Response({
               status: false,
               error: e
           }));
        }
    }
}

module.exports = api;

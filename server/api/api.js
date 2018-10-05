const db = require('./../db/index.js');

const api = {

    //Проверяем, есть ли пользователь в БД, если да, то возвращаем его объект клиенту
    async checkUser(req, res) {
        const email = req.params.email;
        try {
            const dbConnection = await db.connect();
            let user = await dbConnection.db.collection('answers').find({email}).toArray();
            await dbConnection.client.close();
            if(user.length > 0) {
                res.json({status: true, user: user[0]});
            }
            else {
                throw new Error('Пользователь не найден в базе данных');
            }
        }
        catch(e) {
            console.error(e);
            res.json({status: false});
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
                res.json({status: true});
            }
            else {
                throw new Error('Ошибка обновления. Попробуйте позже');
            }
        }
        catch(e) {
            console.log(e);
            res.json({status: false});
        }
    }
}

module.exports = api;

const db = require('./../db/index.js');
const logger = require('./../logger/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/nnz_form_config.js');

//Классы
const Response = require('./../models/Response.js');
const ApiError = require('./../models/ApiError.js');

const saltRounds = 10;

const auth = {

    // async createDefaultUser() {
    //     console.log('??????');
    //     try {
    //         const password = await bcrypt.hash(config.defaultUser.password, saltRounds);
    //         const dbConnection = await db.connect();
    //         let insert = await dbConnection.db.collection('users').insertOne({
    //             email: config.defaultUser.email,
    //             password
    //         });
    //         await dbConnection.client.close();
    //         if(insert.insertedCount === 1) {
    //             console.log('default user created');
    //         }
    //     }
    //     catch(e) {
    //         // logger.error(`Programm Error - ${e.stack || e} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
    //         console.log(e);
    //     }
    // },
    /**
    * Создание токена авторизации
    * @param  {string} userId - id пользователя в БД
    * @return {Promise}       - resolve:    токен;
    *                           reject:     ошибка, при генерации токена;
    */
    createToken(userId) {
        let data = {
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
            data: userId
        };
        return new Promise( (res, rej) => {
            jwt.sign(data, config.secret, (err, token) => {
                if(err) rej(err);
                res(token);
            });
        });
    },

    /**
     * Расшифровка токена
     * @param  {String} token - токен пользователя
     * @return {Promise}      - res(расшифрованный токет)
     *                        - rej(ошибка операции)
     */
    verifyToken(token) {
        return new Promise( (res, rej) => {
            jwt.verify(token, config.secret, function(err, decoded) {
                if(err) {
                        console.log(err);
                        rej(new ApiError({
                            code: 0000,
                            name: err.name,
                            message: 'Ваш токен устарел, для получения нового токена пройдите процесс авторизации'
                        })
                    );
                }
                res(decoded);
            });
        });
    },

    async login(req, res) {
        try {
            let {email, password} = req.body;
            let dbConnection = await db.connect();
            let user = await dbConnection.db.collection('users').findOne({email});
            if(user) {
                let passwordCheck = await bcrypt.compare(password, user.password);
                if(passwordCheck) {
                        res.json(new Response({
                            status: true,
                            data: await auth.createToken(user._id)
                    }));
                }
                else {
                    throw new ApiError({
                        name: 'User Unauthorized',
                        message: `Пользователь с email: ${email} не прошел проверку пароля`,
                        code: 401
                    });
                }
            }
            else {
                throw new ApiError({
                    name: 'User Unauthorized',
                    message: `Пользователь с email: ${email} не найдет в БД`,
                    code: 401
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

    async checkAuth(req, res) {
        try {
            let token = req.params.token;
            let id = await verifyToken(token);
            let dbConnection = await db.connect();
            let user = dbConnection.db.collection('users').findOne({_id: db.objectId(id)});
            if(user) {
                res.json(new Response({
                    status: true,
                    data: user
            }));
            }
            else {
                throw new ApiError({
                    name: 'User Unauthorized',
                    message: `Пользователь с id: ${id} не найдет в БД`,
                    code: 401
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
    }
}

module.exports = auth;

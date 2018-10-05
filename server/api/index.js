const api = require('./api.js');

module.exports = {
    // Проверка пользователя в БД и файле пользователей
    checkUser: api.checkUser,
    //Сохранение ответа пользователя в БД
    saveAnswer: api.saveAnswer
}

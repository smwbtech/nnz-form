const api = require('./api.js');

module.exports = {
    // Проверка пользователя в БД и файле пользователей
    checkUser: api.checkUser,
    // Добавление нового рецепиента
    addRecepient: api.addRecepient,
    //Сохранение ответа пользователя в БД
    saveAnswer: api.saveAnswer
}

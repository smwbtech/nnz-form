const auth = require('./auth.js');

module.exports = {
    createDefaultUser: auth.createDefaultUser,
    // Авторизация
    login: auth.login,

    // Идентификация пользователя
    checkAuth: auth.checkAuth
}

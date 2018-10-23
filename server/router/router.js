const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const router = express.Router();

// Конетроллеры
const api = require('./../api/index.js');
const auth = require('./../auth/index.js');

//Middlware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* API */

//Проверка пользователя
router.get('/api/user/check/:id', api.checkUser);
//Добавление нового рецепиента
router.post('/api/recepient/add', api.addRecepient);
//Сохранение ответа пользователя
router.post('/api/user/save_answer', api.saveAnswer);

/* АВТОРИЗАЦИЯ / ИДЕНТИФИКАЦИЯ */

// Авторизация пользователя
router.post('/auth/login', auth.login);
// Идентификация пользователя
router.post('/auth/check/:token', auth.checkAuth);

/// HISTORY MODE FALLBACK API //
router.use(history());

module.exports = router;

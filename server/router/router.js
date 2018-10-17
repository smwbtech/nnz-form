const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const router = express.Router();

// Конетроллеры
const api = require('./../api/index.js');

//Middlware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* API */

//Проверка пользователя
router.get('/api/user/check/:email', api.checkUser);
//Сохранение ответа пользователя
router.post('/api/user/save_answer', api.saveAnswer);

/// HISTORY MODE FALLBACK API //
router.use(history());

module.exports = router;

const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const auth = require('./auth/index.js');
const config = require('./config/nnz_form_config.js');
const { logger } = require('./logger/index.js');

const app = express();

app.set('port', config.port);

 /*** Обработка маршрутов ***/

// Корневой маршрут, отдаем index.html
app.use('/', router);

// Аутентификация

//Статика
app.use(express.static(path.resolve('../dist')));

//404
app.use( (err, req, res) => {
    logger.error(`${err.status || 400} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(404);
});

//500
app.use( (err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500);
    res.send('500 - server error');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

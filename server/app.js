const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const auth = require('./auth/index.js');
const { logger } = require('./logger/index.js');

const app = express();

app.set('port', process.env.PORT || 3000);

(async () => await auth.createDefaultUser())();
 /*** Обработка маршрутов ***/

// Корневой маршрут, отдаем index.html
app.use('/', router);

// Аутентификация

//Статика
app.use(express.static(path.resolve('../dist')));

//404
app.use( (req, res) => {
    logger.error(`${err.status || 400} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(404);
});

//500
app.use( (err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500);
    res.send('500 - server error');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

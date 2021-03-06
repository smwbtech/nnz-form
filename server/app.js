const path = require('path');
const express = require('express');
const router = require('./router/router.js');


const app = express();

app.set('port', process.env.PORT || 3000);

 /*** Обработка маршрутов ***/

// Корневой маршрут, отдаем index.html
app.use('/', router);

// Аутентификация

//Статика
app.use(express.static(path.resolve('../dist')));

//404
app.use( (req, res) => {
    res.status(404);
});

//500
app.use( (err, req, res, next) => {
    res.status(500);
    res.send('500 - server error');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

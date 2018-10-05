const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Конетроллеры
const api = require('./../api/index.js');

//Middlware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// router.get('/', (req, res, err) => {
//     if(err) console.log(err);
//     res.sendFile( path.resolve('./../dist/index.html'));
// });

router.get('/api/user/check/:email', api.checkUser);

router.post('/save', async (req, res, err) => {

});

module.exports = router;

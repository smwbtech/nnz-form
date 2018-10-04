const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

//Middlware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, err) => {
    if(err) console.log(err);
    res.sendFile( path.resolve('./../dist/index.html'));
});

module.exports = router;

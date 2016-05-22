'use strict';

var express = require('express');
var router = express.Router();

router.use('/emotion', require('./emotion'));
// router.use('/S3', require('./S3'));

module.exports = router;

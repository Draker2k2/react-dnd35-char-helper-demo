const express = require('express');

const router = express.Router();

router.use('/abilities', require('./abilities'));

module.exports = router;

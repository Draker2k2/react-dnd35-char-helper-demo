const express = require('express');

const router = express.Router();

router.use('/abilities', require('./abilities'));
router.use('/defenses', require('./defenses'));

module.exports = router;

const express = require('express');

const router = express.Router();

router.use('/abilities', require('./abilities'));
router.use('/defenses', require('./defenses'));
router.use('/items', require('./items'));
router.use('/skills', require('./skills'));
router.use('/buffs', require('./buffs'));
router.use('/feats', require('./feats'));
router.use('/classFeatures', require('./classFeatures'));
router.use('/history', require('./history'));
router.use('/stances', require('./stances'));
router.use('/maneuvers', require('./maneuvers'));
router.use('/misions', require('./misions'));

module.exports = router;

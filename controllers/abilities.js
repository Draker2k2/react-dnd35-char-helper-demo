const express = require('express');

const router = express.Router();

const Item = require('../models/abilities');

router.get('/', (req, res) => {
  Item.find({}).then(data =>
  res.send(data));
});

module.exports = router;

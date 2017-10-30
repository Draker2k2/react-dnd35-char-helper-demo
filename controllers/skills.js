const express = require('express');

const router = express.Router();

const Item = require('../models/skills');

router.get('/', (req, res) => {
  Item.find({}).then(data =>
  res.send(data));
});

module.exports = router;

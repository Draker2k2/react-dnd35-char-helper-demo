const express = require('express');

const router = express.Router();

const Item = require('../models/defenses');

router.get('/', (req, res) => {
  Item.find({}).then(data =>
  res.send(data));
});

router.get('/:id', (req, res) => {
  Item.findOne({ id: req.params.id }).then(data =>
  res.send(data));
});

module.exports = router;

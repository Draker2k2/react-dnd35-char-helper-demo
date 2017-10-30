const express = require('express');

const router = express.Router();

const History = require('../models/history');

router.get('/', (req, res) => {
  History.find({}).then(data =>
  res.send(data));
});

router.post('/', (req, res) => {
  const newHist = new History({
    date: req.body.date,
    tittle: req.body.tittle,
    description: req.body.description,
  });
  newHist.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;

const express = require('express');

const router = express.Router();

const Misions = require('../models/misions');

router.get('/', (req, res) => {
  Misions.find({}).then(data =>
  res.send(data));
});

router.post('/', (req, res) => {
  const newHist = new Misions({
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

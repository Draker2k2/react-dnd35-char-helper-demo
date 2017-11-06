const express = require('express');

const router = express.Router();

const Misions = require('../models/misions');

router.get('/', (req, res) => {
  Misions.find({}).then(data =>
  res.send(data));
});

router.post('/', (req, res) => {
  const newMision = new Misions({
    name: req.body.name,
    objectives: req.body.objectives,
    information: req.body.information,
    completed: req.body.completed,
  });
  newMision.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;

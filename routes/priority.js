const express = require('express');
const router = express.Router();
const priority = require('../services/priority');

router.get('/', async function(req, res, next) {
  try {
    res.json(await priority.getAllPriority());
  } catch (err) {
    console.error(`Error while getting all users `, err.message);
    next(err);
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const status = require('../services/status');

router.get('/', async function(req, res, next) {
  try {
    res.json(await status.getAllStatus());
  } catch (err) {
    console.error(`Error while getting all users `, err.message);
    next(err);
  }
});

module.exports = router;
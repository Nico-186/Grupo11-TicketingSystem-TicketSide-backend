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

router.post('/', async function(req, res, next) {
  try {
    res.json(await status.create(req.body));
  } catch (err) {
    console.error(`Error while creating ticket`, err.message);
    next(err);
  }
});

router.put('/', async function(req, res, next) {
  try {
    res.json(await status.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error while updating user `, err.message);
    next(err);
  }
});

router.delete('/', async function(req, res, next) {
  try {
    res.json(await status.remove(req.query.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

module.exports = router;
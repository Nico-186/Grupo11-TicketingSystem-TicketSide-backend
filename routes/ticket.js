const express = require('express');
const router = express.Router();
const tickets = require('../services/ticket');

router.get('/', async function(req, res, next) {
  try {
    res.json(await tickets.get());
  } catch (err) {
    console.error(`Error while getting tickets `, err.message);
    next(err);
  }
});

router.get('/usernames/', async function(req, res, next) {
  try {
    res.json(await tickets.getUsernames());
  } catch (err) {
    console.error(`Error while getting usernames `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await tickets.create(req.body));
  } catch (err) {
    console.error(`Error while creating ticket`, err.message);
    next(err);
  }
});

router.put('/', async function(req, res, next) {
  try {
    res.json(await userData.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error while updating user `, err.message);
    next(err);
  }
});

router.delete('/', async function(req, res, next) {
  try {
    res.json(await userData.remove(req.query.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

module.exports = router;
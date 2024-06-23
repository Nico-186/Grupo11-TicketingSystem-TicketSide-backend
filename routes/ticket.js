const express = require('express');
const router = express.Router();
const tickets = require('../services/ticket');

router.get('/', async function (req, res, next) {
  try {
    res.json(await tickets.get());
  } catch (err) {
    console.error(`Error al obtener los tickets.\n`, err.message);
    next(err);
  }
});

router.get('/usernames/', async function (req, res, next) {
  try {
    res.json(await tickets.getUsernames());
  } catch (err) {
    console.error(`Error al obtener los nombres de usuario.\n`, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await tickets.create(req.body));
  } catch (err) {
    console.error(`Error al publicar ticket.\n`, err.message);
    next(err);
  }
});

router.put('/', async function (req, res, next) {
  try {
    res.json(await tickets.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar ticket.\n`, err.message);
    next(err);
  }
});

module.exports = router;
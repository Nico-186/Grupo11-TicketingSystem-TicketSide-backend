const express = require('express');
const router = express.Router();
const status = require('../services/status');

router.get('/', async function (req, res, next) {
  try {
    res.json(await status.get());
  } catch (err) {
    console.error(`Error al obtener los estatus.\n`, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await status.create(req.body));
  } catch (err) {
    console.error(`Error al crear estatus.\n`, err.message);
    next(err);
  }
});

router.put('/', async function (req, res, next) {
  try {
    res.json(await status.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar estatus.\n`, err.message);
    next(err);
  }
});

router.put('/delete/', async function (req, res, next) {
  try {
    res.json(await status.remove(req.query.id));
  } catch (err) {
    console.error(`Error al eliminar estatus.\n`, err.message);
    next(err);
  }
});

module.exports = router;
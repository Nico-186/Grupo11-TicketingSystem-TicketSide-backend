const express = require('express');
const router = express.Router();
const priority = require('../services/priority');

router.get('/', async function (req, res, next) {
  try {
    res.json(await priority.get());
  } catch (err) {
    console.error(`Error al obtener las prioridades.\n`, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await priority.create(req.body));
  } catch (err) {
    console.error(`Error al crear prioridad.\n`, err.message);
    next(err);
  }
});

router.put('/', async function (req, res, next) {
  try {
    res.json(await priority.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar prioridad.\n`, err.message);
    next(err);
  }
});

router.put('/delete/', async function (req, res, next) {
  try {
    res.json(await priority.remove(req.query.id));
  } catch (err) {
    console.error(`Error al eliminar prioridad.\n`, err.message);
    next(err);
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const time = require('../services/time');

router.get('/', async function (req, res, next) {
  try {
    res.json(await time.get(req.query.idstatus,req.query.idticket));
  } catch (err) {
    console.error(`Error al obtener los intervalos de tiempo.\n`, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await time.create(req.body));
  } catch (err) {
    console.error(`Error al crear nuevo intervalo de tiempo.\n`, err.message);
    next(err);
  }
});

router.put('/', async function (req, res, next) {
  try {
    res.json(await time.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar el intervalo de tiempo.\n`, err.message);
    next(err);
  }
});

module.exports = router;
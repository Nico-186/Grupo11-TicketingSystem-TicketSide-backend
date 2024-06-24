const express = require('express');
const router = express.Router();
const comments = require('../services/comments');

router.get('/', async function (req, res, next) {
  try {
    res.json(await comments.get(req.query.id));
  } catch (err) {
    console.error(`Error al obtener los comentarios.\n`, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await comments.create(req.body));
  } catch (err) {
    console.error(`Error al publicar comentario.\n`, err.message);
    next(err);
  }
});

router.put('/', async function (req, res, next) {
  try {
    res.json(await comments.update(req.query.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar comentario.\n`, err.message);
    next(err);
  }
});

router.put('/delete/', async function (req, res, next) {
  try {
    res.json(await comments.remove(req.query.id));
  } catch (err) {
    console.error(`Error al eliminar comentario.\n`, err.message);
    next(err);
  }
});

module.exports = router;
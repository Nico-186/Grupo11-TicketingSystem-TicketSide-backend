const express = require('express');
const router = express.Router();
const comments = require('../services/comments');

router.get('/', async function(req, res, next) {
  try {
    res.json(await comments.getComments(req.query.id));
  } catch (err) {
    console.error(`Error while getting comments `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await comments.create(req.body));
    } catch (err) {
      console.error(`Error while creating comment`, err.message);
      next(err);
    }
});

router.delete('/', async function(req, res, next) {
    try {
      res.json(await comments.remove(req.query.id));
    } catch (err) {
      console.error(`Error while deleting comment`, err.message);
      next(err);
    }
});

module.exports = router;
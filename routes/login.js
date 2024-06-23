const express = require('express');
const router = express.Router();
const login = require('../services/login');

router.get('/', async function (req, res, next) {
  try {
    res.json(await login.get(req.query.username, req.query.password));
  } catch (err) {
    console.error(`Error al realizar el inicio de sesión.\n`, err.message);
    next(err);
  }
});

module.exports = router;
const db = require('./db');
const helper = require('../helper');

async function get(user) {
  const conn = await db.connection();
  const rows = await conn.execute(
    `SELECT * FROM grupo11.usuario WHERE nomusua='${user.username}' AND Contraseña='${user.password}';`
  );
  const data = helper.emptyOrRows(rows);
  conn.release();
  return data;
}

module.exports = {
  get
}
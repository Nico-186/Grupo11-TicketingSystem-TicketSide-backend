const db = require('./db');
const helper = require('../helper');

async function get(username, password) {
  const conn = await db.connection();
  const rows = await conn.execute(
    `SELECT * FROM grupo11.usuario WHERE nomusua='${username}' AND Contraseña='${password}';`
  );
  const data = helper.emptyOrRows(rows);
  conn.release();
  return data;
}

module.exports = {
  get
}
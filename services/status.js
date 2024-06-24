const db = require('./db');
const helper = require('../helper');

async function get() {
  const conn = await db.connection();
  const rows = await conn.execute(
    `SELECT * FROM grupo11.status WHERE Deleted = 0;`
  );
  const data = helper.emptyOrRows(rows);
  conn.release();
  return data;
}

async function create(status) {
  const conn = await db.connection();
  const result = await conn.execute(
    `INSERT INTO status (tipostatus, statusFinal) VALUES ('${status.name}',${status.isfinal});`
  );
  let message = 'Error al crear estatus.';
  if (result.affectedRows) {
    message = 'Estatus creado con éxito.';
  }
  conn.release();
  return message;
}

async function update(id, status) {
  const conn = await db.connection();
  const result = await conn.execute(
    `UPDATE status SET tipostatus = '${status.name}', statusFinal = ${status.isfinal} WHERE ID_status = ${id};`
  );
  let message = 'Error al actualizar estatus.';
  if (result.affectedRows) {
    message = 'Estatus actualizado con éxito.';
  }
  conn.release();
  return message;
}

async function remove(id) {
  const conn = await db.connection();
  const result = await conn.execute(
    `UPDATE status SET Deleted = 1 WHERE ID_status = ${id};`
  );
  let message = 'Error al eliminar estatus.';
  if (result.affectedRows) {
    message = 'Estatus eliminado con éxito.';
  }
  conn.release();
  return message;
}

module.exports = {
  get,
  create,
  update,
  remove
}
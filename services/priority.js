const db = require('./db');
const helper = require('../helper');

async function get() {
  const conn = await db.connection();
  const rows = await conn.execute(
    `SELECT * FROM grupo11.prioridad WHERE Deleted = 0;`
  );
  const data = helper.emptyOrRows(rows);
  conn.release();
  return data;
}

async function create(priority) {
  const conn = await db.connection();
  const result = await conn.execute(
    `INSERT INTO prioridad (tipoprio) VALUES ('${priority.name}');`
  );
  let message = 'Error al crear prioridad.';
  if (result.affectedRows) {
    message = 'Prioridad creada con éxito.';
  }
  conn.release();
  return message;
}

async function update(id, priority) {
  const conn = await db.connection();
  const result = await conn.execute(
    `UPDATE prioridad SET tipoprio = '${priority.name}' WHERE ID_prio = ${id};`
  );
  let message = 'Error al actualizar prioridad.';
  if (result.affectedRows) {
    message = 'Prioridad actualizada con éxito.';
  }
  conn.release();
  return message;
}

async function remove(id) {
  const conn = await db.connection();
  const result = await conn.execute(
    `UPDATE prioridad SET Deleted = 1 WHERE ID_prio = ${id};`
  );
  let message = 'Error al eliminar prioridad.';
  if (result.affectedRows) {
    message = 'Prioridad eliminada con éxito.';
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
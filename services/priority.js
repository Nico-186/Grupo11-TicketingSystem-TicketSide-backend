const db = require('./db');
const helper = require('../helper');

async function get() {
  const rows = await db.query(
    `SELECT * FROM grupo11.prioridad;`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}

async function create(priority) {
  const result = await db.query(
    `INSERT INTO prioridad (tipoprio) VALUES ('${priority.name}');`
  );
  let message = 'Error al crear prioridad.';
  if (result.affectedRows) {
    message = 'Prioridad creada con éxito.';
  }
  return message;
}

async function update(id, priority) {
  const result = await db.query(
    `UPDATE prioridad SET tipoprio = '${priority.name}' WHERE ID_prio = ${id};`
  );
  let message = 'Error al actualizar prioridad.';
  if (result.affectedRows) {
    message = 'Prioridad actualizada con éxito.';
  }
  return message;
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM prioridad WHERE ID_prio = ${id};`
  );
  let message = 'Error al eliminar prioridad.';
  if (result.affectedRows) {
    message = 'Prioridad eliminada con éxito.';
  }
  return message;
}

module.exports = {
  get,
  create,
  update,
  remove
}
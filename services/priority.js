const db = require('./db');
const helper = require('../helper');

async function getAllPriority(){
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

  let message = 'Error al crear usuario';

  if (result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function update(id, priority) {
  const result = await db.query(
    `UPDATE prioridad SET tipoprio = '${priority.name}' WHERE ID_prio = ${id};`
  );

  let message = 'Error al crear usuario';

  if (result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM prioridad WHERE ID_prio = ${id};`
  );

  let message = 'Error al crear usuario';

  if (result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

module.exports = {
    getAllPriority,
    create,
    update,
    remove
}
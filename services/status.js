const db = require('./db');
const helper = require('../helper');

async function getAllStatus() {
  const rows = await db.query(
    `SELECT * FROM grupo11.status;`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function create(status) {
  const result = await db.query(
    `INSERT INTO status (tipostatus) VALUES ('${status.name}');`
  );

  let message = 'Error al crear usuario';

  if (result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function update(id, status) {
  const result = await db.query(
    `UPDATE status SET tipostatus = '${status.name}' WHERE ID_status = ${id};`
  );

  let message = 'Error al crear usuario';

  if (result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM status WHERE ID_status = ${id};`
  );

  let message = 'Error al crear usuario';

  if (result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

module.exports = {
  getAllStatus,
  create,
  update,
  remove
}
const db = require('./db');
const helper = require('../helper');

async function get(){
    const rows = await db.query(
      `SELECT * FROM grupo11.ticket;`
    );
    const data = helper.emptyOrRows(rows);
    return data;
}

async function getUsernames(){
  const rows = await db.query(
    `SELECT ID_usuario, nomusua, rol FROM grupo11.usuario;`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}

async function create(ticket){
  const result = await db.query(
    `INSERT INTO ticket (IDusuario, IDstatus, IDprio, NAME, Descripcion, Fecha) VALUES (${ticket.id},1,${ticket.priority},'${ticket.name}','${ticket.description}','${ticket.date}');`
  );
  let message = 'Error al publicar ticket.';
  if(result.affectedRows) {
    message = 'Ticket publicado con éxito.';
  }
  return message;
}

async function update(id, ticket){
  const result = await db.query(
    `UPDATE ticket SET IDencargado = ${ticket.idencargado}, IDstatus = ${ticket.idstatus}, IDprio = ${ticket.idprioridad} WHERE ID_ticket = ${id};`
  );
  let message = 'Error al actualizar ticket.';
  if(result.affectedRows) {
    message = 'Ticket actualizado con éxito.';
  }
  return message;
}

module.exports = {
  get,
  getUsernames,
  create,
  update
}
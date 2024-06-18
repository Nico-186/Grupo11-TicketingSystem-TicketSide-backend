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

  let message = 'Error al crear usuario';

  if(result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function update(id, usuario){
  const result = await db.query(
    `UPDATE grupo11.usuario SET nomusua = '${usuario.username}', Contraseña = '${usuario.password}', rol = ${usuario.role} WHERE ID_usuario = ${id};`
  );

  let message = 'Error al crear usuario';

  if(result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM grupo11.usuario WHERE ID_usuario = ${id};`
  );

  let message = 'Error al crear usuario';

  if(result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

module.exports = {
  get,
  getUsernames,
  create,
  update,
  remove
}
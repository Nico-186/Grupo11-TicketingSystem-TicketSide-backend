const db = require('./db');
const helper = require('../helper');

async function get(id) {
    const rows = await db.query(
        `SELECT * FROM grupo11.comentarios WHERE IDticket = ${id} ORDER BY ID_coment DESC;`
    );
    const data = helper.emptyOrRows(rows);
    return data;
}

async function create(comentario) {
    const result = await db.query(
        `INSERT INTO comentarios (IDticket, Comentario, IDusuario, Fecha) VALUES (${comentario.ticketid},'${comentario.text}',${comentario.userid},'${comentario.date}');`
    );
    let message = 'Error al publicar comentario.';
    if (result.affectedRows) {
        message = 'Comentario publicado con éxito.';
    }
    return message;
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM comentarios WHERE ID_coment = ${id};`
    );
    let message = 'Error al eliminar comentario.';
    if (result.affectedRows) {
        message = 'Comentario eliminado con éxito.';
    }
    return message;
}

module.exports = {
    get,
    create,
    remove
}
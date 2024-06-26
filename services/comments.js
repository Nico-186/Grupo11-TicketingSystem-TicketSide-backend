const db = require('./db');
const helper = require('../helper');

async function get(id) {
    const conn = await db.connection();
    const rows = await conn.execute(
        `SELECT * FROM grupo11.comentarios WHERE IDticket = ${id} AND Deleted = 0;`
    );
    const data = helper.emptyOrRows(rows);
    conn.release();
    return data;
}

async function create(comentario) {
    const conn = await db.connection();
    const result = await conn.execute(
        `INSERT INTO comentarios (IDticket, Comentario, IDusuario, Fecha) VALUES (${comentario.ticketid},'${comentario.text}',${comentario.userid},'${comentario.date}');`
    );
    let message = 'Error al publicar comentario.';
    if (result.affectedRows) {
        message = 'Comentario publicado con éxito.';
    }
    conn.release();
    return message;
}

async function update(id, comment) {
    const conn = await db.connection();
    const result = await conn.execute(
        `UPDATE comentarios SET interno = ${ comment.interno }, final = ${ comment.final } WHERE ID_coment = ${id};`
    );
    let message = 'Error al actualizar comentario.';
    if (result.affectedRows) {
        message = 'Comentario actualizado con éxito.';
    }
    conn.release();
    return message;
}

async function removeFinal(id) {
    const conn = await db.connection();
    const result = await conn.execute(
        `UPDATE comentarios SET final = 0 WHERE IDticket = ${id} AND final = 1;`
    );
    let message = 'Error al eliminar comentario final.';
    if (result.affectedRows) {
        message = 'Comentario final eliminar con éxito.';
    }
    conn.release();
    return message;
}

async function remove(id) {
    const conn = await db.connection();
    const result = await conn.execute(
        `UPDATE comentarios SET Deleted = 1 WHERE ID_coment = ${id};`
    );
    let message = 'Error al eliminar comentario.';
    if (result.affectedRows) {
        message = 'Comentario eliminado con éxito.';
    }
    conn.release();
    return message;
}

module.exports = {
    get,
    create,
    update,
    removeFinal,
    remove
}
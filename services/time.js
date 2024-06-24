const db = require('./db');
const helper = require('../helper');

async function get(idstatus,idticket) {
    const conn = await db.connection();
    const rows = await conn.execute(
        `SELECT * FROM grupo11.tiempo WHERE ID_status = ${idstatus} AND ID_ticket = ${idticket} ORDER BY ID_tiempo DESC;`
    );
    const data = helper.emptyOrRows(rows);
    conn.release();
    return data;
}

async function create(tiempo) {
    const conn = await db.connection();
    const result = await conn.execute(
        `INSERT INTO tiempo (ID_status, inicio, ID_ticket) VALUES (${ tiempo.status },'${ tiempo.start }',${ tiempo.ticket });`
    );
    let message = 'Error al crear nuevo intervalo de tiempo.';
    if (result.affectedRows) {
        message = 'Intervalo de tiempo creado con éxito.';
    }
    conn.release();
    return message;
}

async function update(id, tiempo) {
    const conn = await db.connection();
    const result = await conn.execute(
        `UPDATE tiempo SET final = '${ tiempo.end }' WHERE ID_tiempo = ${id};`
    );
    let message = 'Error al actualizar el intervalo de tiempo.';
    if (result.affectedRows) {
        message = 'Intervalo de tiempo actualizado con éxito.';
    }
    conn.release();
    return message;
}

module.exports = {
    get,
    create,
    update
}
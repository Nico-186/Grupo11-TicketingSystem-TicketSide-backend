const db = require('./db');
const helper = require('../helper');

async function getAllPriority(id){
    const rows = await db.query(
      `SELECT * FROM grupo11.prioridad;`
    );
    const data = helper.emptyOrRows(rows);
  
    return data;
}

module.exports = {
    getAllPriority,
}
const db = require('./db');
const helper = require('../helper');

async function getAllStatus(id){
    const rows = await db.query(
      `SELECT * FROM grupo11.status;`
    );
    const data = helper.emptyOrRows(rows);
  
    return data;
}

module.exports = {
    getAllStatus,
}
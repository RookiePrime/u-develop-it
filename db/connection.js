const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1nd@X878mysql',
    database: 'election'
});

module.exports = db;
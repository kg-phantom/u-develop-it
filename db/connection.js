const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localHost',
        user: 'root',
        password:'Kd0v4hkiin$1228',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
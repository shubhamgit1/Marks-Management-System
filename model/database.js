const mysql = require('../controller/node_modules/mysql');

const mysqlConnection = mysql.createPool({
    connectionLimit: 2,
    host: 'localhost',
    user: 'root',
    password: 'sc123456',
    database: 'almabetter',
    insecureAuth : true
    
});

module.exports = mysqlConnection;
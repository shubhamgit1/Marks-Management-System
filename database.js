const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sc123456',
});

mysqlConnection.query("CREATE DATABASE IF NOT EXISTS mydb28");

mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sc123456',
    database: 'mydb28',
});

var sql = "CREATE TABLE IF NOT EXISTS students (roll_no int not null,\
                                                name varchar(50) not null,\
                                                maths_marks int not null,\
                                                physics_marks int not null,\
                                                chemistry_marks int not null,\
                                                total_marks int not null,\
                                                percentage int not null)";

mysqlConnection.query(sql);

module.exports = mysqlConnection;
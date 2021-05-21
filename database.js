const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sc123456',
    
});

connection.connect(function(err){  
    if (err) throw err;  
    console.log("Connected!");  
    connection.query("CREATE DATABASE IF NOT EXISTS mydb4", function (err, result) {  
    if (err) throw err;  
    else{
        console.log("Database created"); 
    }
     
    });  
});
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sc123456',
    database: 'mydb4',
    
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS students (roll_no int not null,\
                                                    name varchar(50) not null,\
                                                    maths_marks int not null,\
                                                    physics_marks int not null,\
                                                    chemistry_marks int not null,\
                                                    total_marks int not null,\
                                                    percentage int not null)";
    mysqlConnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    });
});


module.exports = mysqlConnection;
const studentsController = require('../controllers/studentsController');
const mysqlConnection = require('../database');
studentsModel=function(){};

studentsModel.getAllStudents=function(result){
    mysqlConnection.query("select * from students order by percentage desc",function(err,rows){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,rows);
        }
    });
}
studentsModel.deleteStudent=function(roll_no,result){
    
    mysqlConnection.query('delete from students where roll_no = ?',[roll_no],function(err,rows,fields){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,rows);
        }
    });
}

studentsModel.addStudent=function(newStudent,result){
    var sql = 'INSERT INTO students VALUES ?';
    mysqlConnection.query(sql,newStudent,function(err,rows,fields){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,rows);
        }
    });
}

studentsModel.sortStudents=function(sortby,result){
    var sql='select * from students order by ';
    sql=sql+sortby;
    if(sortby!='roll_no') sql+=' desc';
    mysqlConnection.query(sql,function(err,rows,fields){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,rows);
        }
    });
}

studentsModel.searchStudent=function(name,result){
    var sql="select * from students where name = '";
    sql+=name;
    sql+="'";
    mysqlConnection.query(sql,function(err,rows,fields){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,rows);
        }
    });
}

studentsModel.searchRollno=function(roll_no,result){
    var sql="select * from students where roll_no = ";
    sql+=roll_no;
    mysqlConnection.query(sql,function(err,rows,fields){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,rows);
        }
    });
}

studentsModel.update=function(newInfo,result){
    var sql="update students set name = ?, maths_marks = ?, physics_marks = ?, chemistry_marks=?,total_marks=?,percentage=? where roll_no=?";
    mysqlConnection.query(sql,newInfo,function(err,rows,fields){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,rows);
        }
    });
}

module.exports = studentsModel;
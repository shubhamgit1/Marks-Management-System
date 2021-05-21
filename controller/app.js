const mysql = require('mysql');
const express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
// const marks=require("../client/marks.")
var mysqlConnection=require("../model/database.js");
var app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set('views', path.join(__dirname, '/../views'));
// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'sc123456',
//     database: 'almabetter',
//     insecureAuth : true
    
// });

// mysqlConnection.connect((err) =>{
//     if(!err){
//         console.log('Connected to database');
//     }
//     else{
//         console.log('Connection to database failed \n error : '+ JSON.stringify(err,undefined,2));
//     }
// });

app.get('/', function(req,res){
    mysqlConnection.query("select * from students", function(err,rows,fields){
        if(!!err){
            console.log('error in the query');
        }
        else{
            console.log('successful query');
            // console.log(rows); 
            res.render("home.ejs");
            // res.send(rows);
        }
    });
})
// app.get('/', function(req,res){
//     mysqlConnection.getConnection(function(err,tempCont){
//         if(!!err){
//             tempCont.release();
//             console.log('Error');
//         }
//         else{
//             console.log('Connected');
//             tempCont.query("select * from students", function(err,rows,fields){
//                 if(!!err){
//                     console.log('error in the query');
//                 }
//                 else{
//                     console.log('successful query');
//                     // console.log(rows); 
//                     res.json(rows);
//                 }
//             });
//         }
//     })
    
// })

// app.get('/:id1',function(req,res){
//     mysqlConnection.query("select * from students where roll_no=?",[req.params.id1], function(err,rows,fields){
//                 if(!!err){
//                     console.log('error in the query');
//                 }
//                 else{
//                     console.log('successful query id');
//                     // console.log(rows); 
//                     res.send(rows);
//                 }
//             });
// })
app.get("/marks",function(req,res){
    res.render("marks");
});
// "insert into students values ?"[req.body.input_roll_no,req.body.input_name,req.body.input_maths_marks,req.body.input_physics_marks,req.body.input_chemistry_marks,'4','4']
app.post("/marks",function(req,res){
    const studentsDetails=req.body;
    var r=req.body.roll_no;
    var n=req.body.name;
    var m=parseInt(req.body.maths_marks);
    var p=parseInt(req.body.physics_marks);
    var c=parseInt(req.body.chemistry_marks);
    var t=m+p+c;
    var pt=t*100/300;
    var sql = 'INSERT INTO students VALUES ?';
    mysqlConnection.query(sql,[[[r,n,m,p,c,t,pt]]],function(err,rows,fields){
        if(err){
            console.log(err);
        }
        else{
            console.log("successfully added");
            console.log(req.body);
            res.redirect("/leaderboard");
        }
    });
    console.log(req.body.roll_no);
});

app.get("/leaderboard",function(req,res){
    mysqlConnection.query("select * from students order by percentage desc", function(err,rows,fields){
        if(err){
            console.log('error in the query');
        }
        else{
            console.log('successful query');
            // console.log(rows); 
            res.render("leaderboard",{rows:rows});
            // res.json(rows);
        }
    });
});

app.get('/leaderboard/:sortby',function(req,res){
    console.log(req.params.sortby);
    var sql='select * from students order by ';
    sql=sql+req.params.sortby;
    if(req.params.sortby!='roll_no') sql+=' desc';
    console.log(sql);
    mysqlConnection.query(sql, function(err,rows,fields){
        if(err){
            console.log("err");
        }
        else{
            console.log('successful query of id');
            // console.log(rows); 
            res.render("leaderboard",{rows:rows});
            // res.json(rows);
        }
    });
});

app.post("/search",function(req,res){
    var sql="select * from students where name = '";
    sql+=req.body.search_input;
    sql+="'";
    console.log(sql);
    mysqlConnection.query(sql,function(err,rows,fields){
        if(err){
            console.log("error");
        }
        else{
            console.log('search successful');
            res.render("leaderboard",{rows:rows});
        }
    })
})

app.post("/delete",function(req,res){
    var sql='delete from students where roll_no = ';
    sql+=req.body.delete_input;
    mysqlConnection.query(sql,function(err,rows,fields){
        if(err){
            console.log("error");
        }
        else{
            console.log('deleted successfully');
            res.redirect("/leaderboard");
        }

    })
})

app.listen(2000,function(){
    console.log("Server is running...");
});

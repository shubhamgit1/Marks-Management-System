var studentsModel= require('../model/studentsModel');
var studentsController=function(){};
const path = require('path');
var prePath=path.join(__dirname, '/../views/');

studentsController.home=function(req,res,next){
    res.render(prePath+'home');
}


studentsController.show=function(req,res,next){
    studentsModel.getAllStudents(function(err,rows){
        if(err){
                throw err;
        }else{
            res.render(prePath+'leaderboard.ejs',{rows:rows});
        }
       
    });
}

studentsController.enterMarks=function(req,res){
    res.render(prePath+'marks');
}

studentsController.add = function(req,res){
    const studentsDetails=req.body;
    var r=req.body.roll_no;
    var n=req.body.name;
    var m=parseInt(req.body.maths_marks);
    var p=parseInt(req.body.physics_marks);
    var c=parseInt(req.body.chemistry_marks);
    var t=m+p+c;
    var pt=t*100/300;
    var newStudent=[[[r,n,m,p,c,t,pt]]];
    studentsModel.addStudent(newStudent,function(err,rows,fields){
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
};

studentsController.searchRollno=function(req,res){
    var roll_no=req.body.update_input;
    studentsModel.searchRollno(roll_no,function(err,rows,fiels){
        if(err){
            console.log(err);
        }
        else{
            console.log("successfully searched");
            if(rows.length>0){
                res.render(prePath+'update',{rows:rows});
            }
            else{
                res.redirect('/marks');
                console.log('This roll no does not exist')
            }
        }
    })
};

studentsController.update=function(req,res){
    var r=req.params.roll_no;
    var n=req.body.name;
    var m=parseInt(req.body.maths_marks);
    var p=parseInt(req.body.physics_marks);
    var c=parseInt(req.body.chemistry_marks);
    var t=m+p+c;
    var pt=t*100/300;
    var newInfo=[n,m,p,c,t,pt,r];
    studentsModel.update(newInfo,function(err,rows,fiels){
        if(err){
            console.log(err);
        }
        else{
            console.log("successfully updated");
            console.log(rows);
            res.redirect("/leaderboard");
        }
    })
}

studentsController.sort = function(req,res){
    
    var sortby=req.params.sortby;
    studentsModel.sortStudents(sortby, function(err,rows,fields){
        if(err){
            console.log("err");
        }
        else{
            console.log('successful query of id');
            // console.log(rows); 
            res.render(prePath+'leaderboard',{rows:rows});
        }
    });
};

studentsController.search=function(req,res){
    var name=req.body.search_input;
    studentsModel.searchStudent(name,function(err,rows,fields){
        if(err){
            console.log("error");
        }
        else{
            console.log('search successful');
            res.render(prePath+'leaderboard',{rows:rows});
        }
    })
}


studentsController.delete= function(req,res){
    var roll_no=req.body.delete_input;
    studentsModel.deleteStudent(roll_no,function(err,rows){
        if(err){
            console.log("error");
        }
        else{
            console.log('deleted successfully');
            res.redirect("/leaderboard");
        }

    });
}


module.exports=studentsController;
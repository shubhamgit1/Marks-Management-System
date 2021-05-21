var express=require('express');
var routes= express.Router();
// var controllerPath = __dirname + '/../controllers';
// var controllers= require(controllerPath);
var studentsController= require('../controllers/studentsController');

// routes.get('/',controllers.studentsController.home);
// routes.get('/leaderboard',controllers.studentsController.show);
routes.get('/',studentsController.home);
routes.get('/marks',studentsController.enterMarks)
routes.post('/marks',studentsController.add);
routes.get('/leaderboard',studentsController.show);
routes.get('/leaderboard/:sortby',studentsController.sort);
routes.post('/search',studentsController.search);
routes.post('/delete',studentsController.delete);

module.exports=routes;
var express=require('express');
var routes= express.Router();
var studentsController= require('../controllers/studentsController');


routes.get('/',studentsController.home);
routes.get('/marks',studentsController.enterMarks)
routes.post('/marks',studentsController.add);
routes.post('/update',studentsController.searchRollno);
routes.post('/update/:roll_no',studentsController.update);
routes.get('/leaderboard',studentsController.show);
routes.get('/leaderboard/:sortby',studentsController.sort);
routes.post('/search',studentsController.search);
routes.post('/delete',studentsController.delete);

module.exports=routes;
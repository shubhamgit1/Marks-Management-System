const mysql = require('mysql');
const express = require('express');
var bodyparser = require('body-parser');
var app=express();
const routes = require('./routes/routes');
const path = require('path');
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set('views', path.join(__dirname, '/../views'));


app.use('/', routes);

app.listen(3000,function(){
    console.log("Server is running at PORT 3000...");
});

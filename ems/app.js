/*
============================================
; Title:  app.js
; Author: Alex Haefner
; Date:   5 May 2021
; Description: routing, employee model
;===========================================
*/

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

var mongoDB = "<mLab connection string>";

mongoose.connect(mongoDB, {

    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));


db.once("open", function() {

    console.log("Application has been connected to mLab MongoDB instance");
});

app.set("views", path.resolve(__dirname, "views"));

//Defining a new location for static files(in this case css)
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.use(logger("short"));

var employee = new Employee({

    fName: "Test"

});


app.get("/", function (request, response) {

    response.render("index", {

        title: "Home Page"

    });

});

//Routing for list page
app.get('/list', function(req, res) {  
    
    res.render('list', {
        
        title: "List Page"
    } 

    );

});

//Routing for new page
app.get('/new', function(req, res) {  
    
    res.render('new', {
        
        title: "New Page"
    } 

    );

});


//Routing for new page
app.get('/view', function(req, res) {  
    
    res.render('view', {
        
        title: "View Page"
    } 

    );

});



http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
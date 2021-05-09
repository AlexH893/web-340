/*
============================================
; Title:  app.js
; Author: Alex Haefner
; Date:   8 May 2021
; Description: routing, employee model
;===========================================
*/

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var helmet = require('helmet');

var bodyParser = require("body-parser");

var cookieParser = require('cookie-parser');

var csrf = require('csurf');

//Setup csurf protection
var csrfProtection = csrf({cookie:true});

//Initialize express application
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

//Use statement for logger
app.use(logger("short"));

//Use statement for helmet
app.use(helmet.xssFilter());

//Use statement for bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));

//Use statement for cookie parser
app.use(cookieParser());

//Use statement for csrf
app.use(csrfProtection);

app.use(function(request, response, next) {

    var token = request.csrfToken();

    response.cookie('XSRF-TOKEN', token);

    response.locals.csrfToken = token;

    next();
});






var employee = new Employee({

    fName: "Test"

});


app.get("/", function (request, response) {

    response.render("index", {

        //title: "Home Page"
        message: "XSS Prevention Example"

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


app.get('/', function(req, res) {

    res.render("index", {
        message: "New fruit entry page"
    });

});


app.post('/process', function(request, response) {

    console.log(request.body.txtName);

    response.redirect("/");
    
});





//Routing for new page
app.get('/view', function(req, res) {  
    
    res.render('view', {
        
        title: "View Page"
    } 

    );

});


//Create/start node server
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
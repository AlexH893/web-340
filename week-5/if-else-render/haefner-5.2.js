
//adding express
var express = require("express");

var http = require("http");

var path = require("path");

//app functions
var app = express();

//tells express to look inside views folder for any files
app.set("views", path.resolve(__dirname, "views"));

//use this view engine
app.set("view engine", "ejs");

var nameArray = [
    "alex",
    
    "brad",

    "dan",

    "smith"
];

//routes 
app.get("/", function(request, response) {

    //return list of names
    response.render("index", {

        names: nameArray
    })
});

//creating server, passing in app object, listening on port 8080
http.createServer(app).listen(8080, function() {

    //Says the server has started
    console.log("application started on port 8080!");

});
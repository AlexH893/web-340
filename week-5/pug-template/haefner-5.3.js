/*
    Title: haefner-5.3.js
    Author: Alex Haefner
    Date: 4-15-2021
    Description: Creates a server and sends a message
*/

//Adding express
var express = require("express");

var http = require("http");

//Adding pug
var pug = require("pug");

var path = require("path");

//App functions
var app = express();

//Tells Express the views are in the 'views' directory.
app.set("views", path.resolve(__dirname, "views"));

//Use EJS view engine.
app.set("view engine", "pug");

app.get("/", function(request, response) {

    response.render("index", {

        //Message to be displayed
        message: "Welcome to my Pug based homepage! Please enjoy your stay."

    });

});

//creating server, passing in app object, listening on port 8080
http.createServer(app).listen(8080, function() {

    //Says the server has started
    console.log("Application started on port 8080!");

});
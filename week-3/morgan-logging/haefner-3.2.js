/* 
    Title: haefner-3.2.js
    Author: Alex Haefner
    Date: 3-31-2021
    Description: This page will start a node webserver.
*/
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

//Tells Express the views are in the 'views' directory.
app.set("views", path.resolve(__dirname, "views"));

//Use EJS view engine.
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        message: "Welcome to the Morgan Logger Example! This is a test message."

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");
})


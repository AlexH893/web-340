/*
============================================
; Title: Assignment 2.4
; Author: Alex Haefner
; Date: 3-28-2021
; Description: Sets up a webserver, using port 8080
;===========================================
*/

var http = require("http");

//Require express and create an instance of it
var express = require("express");

var path = require("path");

var app = express();

//Tells Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//Tells Express to use the EJS view engine
app.set("view engine", "ejs");

app.get("/", function(req, res) 

{

   response.render("index", {
    firstName: "Alex",
    lastName: "Haefner",
    address: "Iowa"
   });

});

//Start server and tell it to listen on port 8080.
http.createServer(app).listen(8080, function() {

    //Display message in console that the application has started.
    console.log("EJS-Views app started on port 8080.");

});
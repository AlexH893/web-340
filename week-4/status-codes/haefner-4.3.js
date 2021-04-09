/*
============================================
; Title: Assignment 4.3
; Author: Alex Haefner
; Date: 4-9-2021
; Description: Experimenting with status codes
;===========================================
*/

//Importing express library
 var express = require("express");

//Importing http library
 var http = require("http");
 
 var logger = require("morgan");

 //Registering app
 var app = express();

 //Setting up logger
 app.use(logger("dev"));

 //Creating 3 different GET requests.
app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "Resource not found!"

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "Page has loaded correctly!"

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "Page not implemented!"

    })

});

//Create server on port 8080
http.createServer(app).listen(8080, function() {

    console.log("Application has started on port 8080!");

})
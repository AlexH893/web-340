/*
============================================
; Title: Assignment 4.2
; Author: Alex Haefner
; Date: 4-9-2021
; Description: Experimenting with json api
;===========================================
*/

{
    
    "firstName"; "Alex",
    "lastName"; "Haefner",
    "id"; "1"
}

//Importing express library
var express = require("express");

//Importing http library
var http = require("http");

 //Registering app
var app = express();


app.get("/customer/:id:", function(request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({
        firstName: "Alex",

        lastName: "Haefner",

        employeeId: 10
    });
});

//Create server on port 8080
http.createServer(app).listen(8080, function() {

    console.log("Application has started on port 8080!");

})
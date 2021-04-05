/* 
    Title: haefner-3.3.js
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

//Tells Express to use the EJS view engine.
app.set("view engine", "ejs"); 

app.use(logger("short"));

app.get("/:productId", function(request, response) {

    var productId = parseInt(request.params.productId, 10);

     response.render("index", {

        productId: productId

    })

});

http.createServer(app).listen(8080, function() {

    //Will display to the console.
    console.log("Application started on port 8080");

});
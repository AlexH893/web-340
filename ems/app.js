var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

//Defining a new location for static files(in this case css)
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        title: "Home Page"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
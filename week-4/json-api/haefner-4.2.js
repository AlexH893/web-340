{
    
    "firstName"; "Alex",
    "lastName"; "Haefner",
    "id"; "1"
}


var express = require("express");

var http = require("http");

var app = express();


app.get("/customer/:id:", function(request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({
        firstName: "Alex",

        lastName: "Haefner",

        employeeId: 10
    });
});

http.createServer(app).listen(8080, function() {

    console.log("Application has started on port 8080!");

})
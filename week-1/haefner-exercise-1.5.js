/**
   ==================================================
   ; Title: Exercise 1.5 Hello World
   ; Author: Alex Haefner
   ; Date: 16 March 2021
   ; Modified By: Alex Haefner
   ; Description: Recreating the node server example.
   ;=================================================
   */

var http = require("http");

function processRequest(req, res) {

    //Body message that will display on the page.
    var body = "JavaScript rocks!";
    
        var contentLength = body.length;
    
        //Sends a response header to the request.
        res.writeHead(200, {
    
            'Content-Length': contentLength,
    
            'Content-Type': 'text/plain'
    
        });
        
        //Ending the response process.
        res.end(body);
    
    }

    //This creates a server on your machine.
    var s = http.createServer(processRequest);

//What port the server is listening to.
s.listen(8080);
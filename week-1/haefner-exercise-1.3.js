/**
   ==================================================
   ; Title: Exercise 1.3 - Modules
   ; Author: Alex Haefner
   ; Date: 16 March 2021
   ; Modified By: Alex Haefner
   ; Description: Recreating the module example.
   ;=================================================
   */

//Creating a require statement for the URL library.   
var url = require('url');

//Variable to hold a string URL variable value.
var parsedURL = url.parse('https://www.example.com/profile?name=alex');

//Capturing different pieces of the string URL using console.log
console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

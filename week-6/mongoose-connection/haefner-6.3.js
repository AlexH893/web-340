var express = require('express');

//import http library

var http = require('http');

var logger = require('morgan');

var mongoose = require('mongoose');

//Connection string
var mongoDB = 'mongodb+srv://admin:Password1@buwebdev-cluster-1.8auop.mongodb.net/test';

//Creating our connection by passing in our connection string
mongoose.connect(mongoDB, {

    useMongoClient: true

});

//Promise
mongoose.Promise = global.Promise;

//creating db variable to hold our connection
var db = mongoose.connection;

//error handling
db.on('error', console.error.bind(console, 'MongoDB connection error!'));

//When db is open, display message in console
db.once('open', function() {

    console.log('App connected to mLab!');
})

var app = express();

app.use(logger('dev'));

//creating server
http.createServer(app).listen(8080, function() {
    console.log('App started on port 8080!');
});
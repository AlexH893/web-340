/*
============================================
; Title:  employee.js
; Author: Alex Haefner
; Date:   5 May 2021
; Description: employee schema w/2 fields
;===========================================
*/

//Including mongoose in the project
const mongoose = require('mongoose');

//Creating instance of schema using mongoose
const Schema = mongoose.schema;

//Creating employeeSchema schema with fields
let employeeSchema = new schema ({

    fName: String,
    lName: String

});

//Map the employeeSchema to an Employee model
var Employee = mongoose.model("Employee", employeeSchema);

//Make the module accessible from other JavaScript files
module.exports = Employee;




/*
============================================
; Title:  employee.js
; Author: Alex Haefner
; Date:   5 May 2021
; Description: employee.js
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.schema;

let employeeSchema = new schema ({

    fName: String,
    lName: String

});

//Map the employeeSchema to an Employee model
var Employee = mongoose.model("Employee", employeeSchema);

//Make the module accessible from other JavaScript files
module.exports = Employee;


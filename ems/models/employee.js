//Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Employee Schema
let EmployeeSchema = new Schema({
  name: {type: String, required: true }
});

//Export model so its public
module.exports = mongoose.model('Employee', EmployeeSchema);
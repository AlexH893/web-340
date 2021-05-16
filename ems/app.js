

//Require statements
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');
const Employee = require('./models/employee.js');

//Putting the  mongoDB connection string into a variable 
const conn = 'mongodb+srv://admin:Piplup893@buwebdev-cluster-1.8auop.mongodb.net/test?authSource=admin&replicaSet=atlas-b5wufs-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

/**
 * Mongo DB con
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connection to the database instance was successful');
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
});


//CSRF 
let csrfProtection = csrf({ cookie: true });

//Starts express app
let app = express();

/**
 * Configures the dependency libraries
 */

//Morgan logger
app.use(logger('short'));

//Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Cookie parser
app.use(cookieParser());

// Helmet
app.use(helmet.xssFilter());

//CSRF protection
app.use(csrfProtection);

/**
 * Intercepts all incoming requests and adds a CSRF token to the response
 */
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

//Starts the view engine, sets up directory path and the port
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

//Routing for index page
app.get('/', function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      res.render('index', {
        title: 'EMS | Home',
        employees: employees
      })
    }
  });
});

//Routing for new page
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(req, res) {
  // console.log(request.body.txtName);
  if (!req.body.txtName) {
    res.status(400).send('Entries must have a name');
    return;
  }

  //Gt the request's form data
  const employeeName = req.body.txtName;
  console.log(employeeName);

  //Here we are creating the emp model 
  let employee = new Employee({

    name: employeeName

  });

  //Saving the data 
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

//Routing for the home page
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params['queryName'];

  Employee.find({'name': queryName}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employees: employees
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

//Routing for list page
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       response.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

//This creates the server, and then starts/listens to it on port 8080.
http.createServer(app).listen(app.get('port'), function() {
  console.log('Application started on port ' + app.get('port'));
});
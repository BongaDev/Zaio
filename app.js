var express = require('express');
var bodyParser = require('body-parser');
var signupController = require('./controller/SignupController');
var profileController = require('./controller/ProfileController');

var app = express();
//set up template engine
app.set('view engine', 'ejs');
//static files
app.use('/assets', express.static('assets'));



//Get




//fire controllers
signupController(app);
profileController(app);

//listen to port
app.listen(3000);
console.log("Now listening on port 3000");
var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

// With app.use, you're telling the app to link it to the route /users.
// Now, the / route within your user controller will get mapped to /users.


module.exports = app;


// This file will be used for configuring the app, and that alone.
// All of the logic will be put in its respective directory
// regarding the specific feature it will be implementing.
// We use module.exports to make this app object visible to
// the rest of the program when we call for it using require().
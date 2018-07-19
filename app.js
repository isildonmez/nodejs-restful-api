var express = require('express');
var app = express();

module.exports = app;


// This file will be used for configuring the app, and that alone.
// All of the logic will be put in its respective directory
// regarding the specific feature it will be implementing.
// We use module.exports to make this app object visible to
// the rest of the program when we call for it using require().
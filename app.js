//Express webserver
var express = require('express');

//Access to CloudFoundry enviroment 
var cfenv = require('cfenv');

//New instance if express server
var app = express();
var appEnv = cfenv.getAppEnv();

//middleware for css
app.use('/public/css', express.static('public/css'));

//usado para el servidor de Bluemix
app.listen(appEnv.port, '0.0.0.0', function(){
    console.log('starting at: ', appEnv.port);
});
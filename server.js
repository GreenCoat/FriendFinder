//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

//Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

//Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("listening");
});
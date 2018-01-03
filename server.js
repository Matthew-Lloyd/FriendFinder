// required npm
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var firebase = require('firebase');


var app = express();
var PORT = process.env.PORT || 3000;

//required bodyparser code
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
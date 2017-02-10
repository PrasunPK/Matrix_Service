var http = require('http');
var controller = require('./routes.js');

var IP_ADDRESS = "127.0.0.1";
var PORT = 7077;

var server = http.createServer(controller);

server.listen(PORT, IP_ADDRESS, function () {
    console.log("server is listening on port ", PORT);
});
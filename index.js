var express = require('express');
var socket = require('socket.io');
var app = express();


// using a static folder called 'public' and its content inside of it
app.use(express.static('public'));

// creating a server
var server = app.listen(8080, () => {
    console.log('Listening on port 8080');
});

// adding server in websocket
var io = socket(server);

// init socket server
// for each new client connected arround the globe we get a new unique socket connection
io.on('connection', (socket) => {
    console.log('Socket connection made', socket.id);
});

// due to we have this file in the index.html, and is loaded after the socket lib imported in the header
// we can use the socket functions and variables in here now

// Create connection
var socket = io.connect('http://localhost:8080');
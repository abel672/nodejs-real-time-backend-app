// due to we have this file in the index.html, and is loaded after the socket lib imported in the header
// we can use the socket functions and variables in here now

// Create connection
var socket = io.connect('http://localhost:8080');

// vars to store the chat front end messages
var message = document.querySelector('#message');
var handle = document.querySelector('#handle');
var btn = document.querySelector('#send');
var output = document.querySelector('#output');
var feedback = document.querySelector('#feedback');

// listening the 'send' button click event
btn.addEventListener('click', () => {
    // socket event listener
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    // reset the type message after sending the message also
    socket.emit('typing', {
        message: '',
        handle: ''
    });

    message.value = '';
});

// listening the 'typing' event when user is texting a message
message.addEventListener('input', () => {
    socket.emit('typing', {
        message: message.value,
        handle: handle.value
    });
});

// listening to chat message returned by the backend socket in the server
socket.on('chat', (data) => {
    // handle message here
    output.innerHTML += '<p><strong>' +  data.handle + ':</strong>' + data.message + '</p>';
});

// listening to chat typing of a user by the backend socket in the server
socket.on('typing', (data) => {
    console.log('Value', data);
    // feedback message here
    if (data.message !== '') {
        feedback.innerHTML = "<p> <em>" + data.handle + " is typing a message... </em> </p>";
    } else if (data.message === '') {
        feedback.innerHTML = "";
    }
});

function checkElements() {
    console.log(message);
    console.log(handle);
    console.log(btn);
    console.log(output);
}
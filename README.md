This app will manage real time connection using web sockets.
It shows a basic example of multiple clients connecting via sockets with the server backend, creating real time connection chat room.

You can run the project in your local machine using 'node index.js' and open several windows in localhost:8080 port to see it works.

-- RESOURCES
We are using the library https://cdnjs.com/libraries/socket.io to create the real time connection between clients and the server.

And the https://www.npmjs.com/package/socket.io to create the real time listener and handler in the server side

This app was made by this tutorial:
https://medium.com/@JoshiRabindra/real-time-chat-app-using-websockets-part-2-38a89382d930


// kill all process of node in linux (in case the ports keep still open after you close the terminals of node to run the app)
sudo lsof -i:<PORT_NO>
sudo kill <PID>

  killall -9 node
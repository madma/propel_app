var io = require('socket.io')();

var users = [];

function User() {
  this.initials = null;  //usernames?
  this.isConnected = null;
  this.chats = [];
}

//upon connection, render
//there will be a submit button for a question
//on the client side it will emit a message to our socket io server
//name will be like:
//     ioQSubmitted

io.on('connection', function(socket) { // socket is a specific client (browser)
  console.log('Client connected to socket.io!');
  });

socket.on('io-q-submitted', function(data){
//add question to the db
//ioQSubmitted button needs to include the userid, classroom id, and the question object
//the question object has all the fields from the question schema
//this will constitute the data being passed in
//construct classroom update query since questions belong to classrooms
//any updating we do must be done on the model so we update the model with new question data


});

  socket.on('register-user', function(data) {
    var user = new Player();
    user.initials = data.initials;
    user.isConnected = true;
    users.push(user)
    socket.initials = data.initials;
    io.emit('update-user-list', users.map(user => user.initials));
  });

  socket.on('disconnect', function(data) {
    users.find(user => user.initials === data.initials).isConnected = false;
    io.emit('update-user-list', users.filter(user => user.isConnected).map(user => user.initials));
  });

  socket.on('add-circle', function(data) {
    io.emit('add-circle', data);
  });

  socket.on('clear-circles', function(data) {
    io.emit('clear-circles', data);
  });
});

module.exports = io;

//when a user logs in they should connect to our io server
//the user then connects by emitting a message to the server
// on the server side, the server is listening for a connection message


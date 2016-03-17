var io = require('socket.io')();

var users = [];

function User() {
  this.initials = null;  //usernames?
  this.isConnected = null;
  this.chats = [];
}


io.on('connection', function(socket) {
  console.log('Client connected to socket.io!');

  // server listen for user submit new question
  socket.on('io-q-submit', function(qData){
    console.log('GOT MESSAGE FROM CLIENT WITH DATA: ', qData);
  });


});

module.exports = io;

// socket is a specific client (browser)
//when a user logs in they should connect to our io server
//the user then connects by emitting a message to the server
// on the server side, the server is listening for a connection message
//upon connection, render
//there will be a submit button for a question
//on the client side it will emit a message to our socket io server
//name will be like:
//     ioQSubmitted
  //add question to the db
  //ioQSubmitted button needs to include the userid, classroom id, and the question object
  //the question object has all the fields from the question schema
  //this will constitute the data being passed in
  //construct classroom update query since questions belong to classrooms
  //any updating we do must be done on the model so we update the model with new question data


var io = require('socket.io')();
var questionsSocketController = require('./controllers/socket_io/questions.js');


io.on('connection', function(socket) {
  console.log('Client connected to socket.io!');

  // server listen for user submit new question
  socket.on('io-q-submit', function(qData){
    console.log('GOT MESSAGE FROM CLIENT WITH DATA: ', qData);
    questionsSocketController.create(qData, io, 'io-q-added');
  });

  socket.on('io-a-submit', function(aData){
    console.log('GOT MESSAGE FROM CLIENT WITH DATA: ', aData);
    answersSocketController.create(aData, io, 'io-a-added');
  });


});



module.exports = io;



//we imported io
//referenced socket controller
//io.on opens a socket io server that communicates with all connected clients
//connected client is represented by socket object once it is listened to
//first socket.on is listening for a new question that is submitted
//we now need to add a new socket listener, listening for new answers
// this all needs to be within the io.on object


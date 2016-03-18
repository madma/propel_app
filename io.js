var io = require('socket.io')();
var classroomsController = require('./controllers/socket_io/classrooms.js');


io.on('connection', function(socket) {
  console.log('Client connected to socket.io!');

  // server listen for user submit new question
  socket.on('io-q-submit', function(qData){
    console.log('GOT MESSAGE FROM CLIENT WITH QUESTION DATA: ', qData);
    classroomsController.createField('question', qData, io, 'io-q-added');
  });

  // server listen for user submit new ANSWER
  socket.on('io-a-submit', function(aData){
    console.log('GOT MESSAGE FROM CLIENT WITH ANSWER DATA: ', aData);
    // classroomsController.createField('answer', aData, io, 'io-a-added');
  });
});



module.exports = io;


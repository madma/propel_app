var io = require('../../io');
var Classroom = require('../../models/classroom');


function ioFormatQData(data) {
  return {
      qClassroomId: data.qClassroomId,
      author:   data.qAuthorId,
      title:    data.qTitle,
      body:     data.qBody,
      tags:     data.qTags
    };
}

module.exports = {
  createField: createField,
}

function createField(field, data, ioServer, serverEmitMessage) {
  switch(field) {
    case 'question':
      var qObject = ioFormatQData(data);
      Classroom.findById(data.qClassroomId).exec()
      .then(function(classroom) {
        classroom.questions.push(qObject);
        console.log("PUSHED NEW QUESTION FROM SOCKET");
        return classroom.save();
      })
      .then(function(classroom) {
        console.log(classroom); // already updated
        ioServer.emit(serverEmitMessage, data);
        ioServer.emit('io-q-added', classroom.questions[classroom.questions.length - 1]);
      })
      .catch(function(err) {
        console.log("Error:", err);
      });
      break;
    default:
      console.log('IO ERR: not a valid classroom field');
      break;
  }
}

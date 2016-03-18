var io = require('../../io');
var Classroom = require('../../models/classroom');

function create(qData, ioServer, serverEmitMessage){
  var qObject = ioFormatQData(qData);
  Classroom.findById(qData.qClassroomId).exec()
  .then(function(classroom) {
    classroom.questions.push(qObject);
    console.log("PUSHED NEW QUESTION FROM SOCKET");
    return classroom.save();
  })
    .then(function(classroom) {
      console.log(classroom); // already updated
      ioServer.emit(serverEmitMessage, qData);
      ioServer.emit('io-q-added', classroom.questions[classroom.questions.length - 1]);
    })
  .catch(function(err) {
    console.log("Error:", err);
  });
}

function ioFormatQData(qData) {
  return {
      qClassroomId: qData.qClassroomId,
      author:   qData.qAuthorId,
      title:    qData.qTitle,
      body:     qData.qBody,
      tags:     qData.qTags
    };
}

module.exports = {
  create: create,
}

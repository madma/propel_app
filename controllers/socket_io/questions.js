var io = require('../../io');

function create(qData, ioServer, serverEmitMessage){
  var qObject = ioFormatQData(qData);
  // Classroom.findById(qData.qClassroomId).exec()
  // .then(function(classroom) {
  //   classroom.questions.push(qObjectquestion object formatted from qData);
  //   console.log("PUSHED NEW QUESTION FROM SOCKET");
  //   classroom.save()
  //   .then(function() {
  //     console.log(classroom); // already updated
      ioServer.emit(serverEmitMessage, qData);
      // io.emit('io-q-added', classroom.questions[classroom.questions.length - 1]);
  //   })
  // })
  // .catch(function(err) {
  //   console.log("Error:", err);
  // });
}

function ioFormatQData(qData) {
  return {
      //qClassroomId:
      author: qData.qAuthorId,
      title:    qData.qTitle,
      body:     qData.qBody,
      tags:     qData.qTags
    };
}

module.exports = {
  create: create,
}

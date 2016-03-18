var io = require('../../io');

function create(aData, ioServer, serverEmitMessage){
  var aObject = ioFormatAData(aData);
  // Classroom.findById(aData.aClassroomId).exec()
  // .then(function(classroom) {
  //   classroom.questions.answers.push(aObjectquestion object formatted from aData);
  //   console.log("PUSHED NEW ANSWER FROM SOCKET");
  //   classroom.save()
  //   .then(function() {
  //     console.log(classroom); // already updated
      ioServer.emit(serverEmitMessage, aData);
      // io.emit('io-a-added', classroom.questions.answers[classroom.questions.answers.length - 1]);
  //   })
  // })
  // .catch(function(err) {
  //   console.log("Error:", err);
  // });
}

function ioFormatAData(aData) {
  return {
      //qClassroomId:
      author: aData.aAuthorId,
      body:   aData.aBody
    };
}

module.exports = {
  create: create
}

//we need the question id, or we just have to know
//mongoose will auto generate objectids and the format is _id
//we need to get the _id for the question we are answering
//that has to be included in aData

//can we delete answers or should we? can we update them?

//how do we get questionid, classroom id, and figure out how to store it and where
//keith might have made an array of pushed info which he then renders but we have to double-check

//Keith says:

//the answer id shouldn't be generated at the point when we do socket.io since the answer is not yet saved to the database

//since an event listener is being linked up, we can grab the id from the click event and then find the id somehow

//then send in a json data package


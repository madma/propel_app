var io = require('../../io');
var Classroom = require('../../models/classroom');
var User      = require('../../models/user');


function ioFormatQData(data) {
  return {
      // qClassroomId: data.qClassroomId,
      author:   data.qAuthorId,
      title:    data.qTitle,
      body:     data.qBody,
      tags:     data.qTags
    };
}

function ioFormatAData(data) {
  return {
      // qClassroomId: data.qClassroomId,
      author:   data.aAuthorId,
      body:     data.aBody,
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
        var questionSubDoc = classroom.questions.create(qObject);
        classroom.questions.push(questionSubDoc);
        return classroom.save().then(function() { return questionSubDoc; });
      })
      .then(function(createdItem) {
        return User.findById(createdItem.author).then(function(author) {
          // turn the createdItem into a "plain" JS object
          var createdItemObj = createdItem.toObject();
          // add the author's displayName
          createdItemObj.displayName = author.displayName();

          return createdItemObj;
        });
      })
      .then(function(createdItemObj) {
        // emit
        console.log("PUSHING NEW QUESTION FROM SOCKET", createdItemObj);
        ioServer.emit(serverEmitMessage, createdItemObj);
      })
      .catch(function(err) {
        console.log("Error:", err);
      });
      break;



    case 'answer':
      var aObject = ioFormatAData(data);
      // console.log("DATA", data);
      Classroom.findById(data.aClassroomId).exec()
      .then(function(classroom) {
        // console.log("clas", classroom);
        // console.log("questions", classroom.questions);
        // console.log('question itself', classroom.questions.id(data.aQuestionId));
        var question = classroom.questions.id(data.aQuestionId);
        var answerSubDoc = question.answers.create(aObject);

        question.answers.push(answerSubDoc);
        console.log('saved question', question);

        return classroom.save()
        // .then(function(question) {
        //   question.answers.push(answerSubDoc);
        //   return classroom.save().then(function() { return answerSubDoc; });
        // })
      })
      .then(function(createdItem) {
        console.log(createdItem);
        return User.findById(createdItem.creator).then(function(author) {
          // turn the cretedItem into a "plain" JS object
          var createdItemObj = createdItem.toObject();
          // add the author's displayName
          // createdItemObj.displayName = author.displayName();

          return createdItemObj;
        });
      })
      .then(function(createdItemObj) {
        // emit
        console.log("PUSHING NEW ANSWER FROM SOCKET", createdItemObj);
        ioServer.emit(serverEmitMessage, createdItemObj);
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

// in classrooms collection in questions array field find the doc with _id field equal to 56eb...
// db.classrooms.find(
//   {questions:
//     {$elemMatch:
//       {_id: ObjectId("56eb5a8c35b74aef2c3ae3fa")}
//     }
//   });

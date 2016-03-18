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
      author:   data.qAuthorId,
      body:     data.qBody,
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
      Classroom.findById(data.qClassroomId).exec()
      .then(function(classroom) {
        var questionSubDoc = classroom.questions.create(qObject);
        classroom.questions.push(questionSubDoc);
        return classroom.save().then(function() { return questionSubDoc; });
      })
      .then(function(createdItem) {
        return User.findById(createdItem.author).then(function(author) {
          // turn the cretedItem into a "plain" JS object
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


    default:
      console.log('IO ERR: not a valid classroom field');
      break;
  }
}

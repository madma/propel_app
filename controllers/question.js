var Classroom = require('../models/classroom');
var User = require('../models/user');


module.exports = {
  questionIndex: questionIndex,
  questionCreate: questionCreate
};


function questionIndex(req, res){
  console.log(req.params.id);
  Classroom.findById(req.params.id, function(err, classroom) {
    if (err) {
      res.send(err);
    } else {
      console.log(classroom);
      // var questions = classroom.questions
      res.json(classroom);
    }
  });
}

function questionCreate(req, res, next){
  console.log('req body', req.body);
  Classroom.findById(req.params.id, function(err, classroom) {
    if (err) {
      res.send(err);
    } else {
      // var qclassroom = classroom[0];
      console.log('just the classroom ',classroom);
      var newQuestion = ({
        author     : req.body.author,
        body       : req.body.body,
        //title : req.body.title
      });
      // console.log(req.body.tags);

      console.log('new question data', newQuestion)

      console.log('classroom old questions', classroom.questions)

      classroom.questions.push(newQuestion);
      console.log("updated classroom question",classroom);

      return classroom.save();

      // classroom.save(function(err, classroom){
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     res.json(classroom);
      //   }
      // });
    }
  })
  .then(function(classroom) {
    console.log("  -> saved!", classroom);
    // socket.io emit message from here, with the newly added question sub-doc
    res.json(classroom); //classroom.question
  })
  .catch(function(err) { next(err); });
}


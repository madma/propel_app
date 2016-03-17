var Classroom = require('../models/classroom');
var User      = require('../models/user');

module.exports = {
  classroomCreate:  classroomCreate,
  classroomIndex:   classroomIndex,
  usersIndex:       usersIndex,
  userShow:         userShow,
  userEdit:         userEdit,
  userAddClassroom: userAddClassroom,
};

function userAddClassroom(req, res, next) {
  var userId = req.params.id;
  Classroom.findOne({ "signUpCode": req.body.classroom })
  .then(function(classroom) {
    User.findById(userId, function(err, user) {
      if (err) return res.send(err);
      var classId = classroom._id;
      if (user.classrooms.indexOf(classId) === -1) {
        user.classrooms.push(classId);
      }
      user.save(function(err, updatedUser) {
        if (err) return res.send(json);
        res.json(updatedUser);
      });
    })
  })
}

//function for classroomIndex
function classroomIndex(req, res, next) {
  Classroom.find({}, function(err, classrooms){
    if (err) {
      res.send(err);
    } else {
      res.json(classrooms)
    }
  });
}

function usersIndex(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.json(users);
    }
  });
}

function userShow(req, res, next) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
}

function userEdit(req, res, next) {
  var id = req.params.id;
  console.log("USER EDIT ID", req.body);
  User.findById(id, function(err, user) {
    if (err) {
      next(err);
    } else {

      if (req.body.firstName)   user.firstName   = req.body.firstName;
      if (req.body.lastName)    user.lastName    = req.body.lastName;
      if (req.body.email)       user.email       = req.body.email;
      if (req.body.institution) user.institution = req.body.institution;
      if (req.body.location)    user.location    = req.body.location;
      user.newUser = false;

      user.save(function(err, updatedUser) {
        if (err) {
          res.send(err);
        }
        console.log("Saving user: ");
        res.json(updatedUser);
      });
    }
  });
}

function classroomIndex(req, res, next) {
  Classroom.find({}, function(err, classrooms) {
    if (err) {
      res.send(err);
    } else {
      res.json(classrooms);
    }
  });
}

function classroomCreate(req, res, next) {
  console.log("Creating classroom!");
  console.log("  -> body: ", req.body);

  generateUniqueClassCode()
    .then(function(code) {
      console.log("  -> code generated:", code);
      var classroom = new Classroom({
        name       : req.body.name,
        admins     : [req.body.creator],
        signUpCode : code
        // classroom.admins.push(req.body.admins);
        // classroom.professionals   = req.body.professionals;
      });

      if (req.body.description) {
        classroom.description = req.body.description;
      }
      if (req.body.type) {
        classroom.type = req.body.type;
      }


      return classroom.save();
    })
    .then(function(classroom) {
      console.log("  -> saved!", classroom);
      res.json(classroom);
    })
    .catch(function(err) { next(err); });
};


//supply new classCode to newclassroom
// function makeThreadId() {
//   console.log("only once??")
//   var code = "";
//   Classroom.find({}, function(err, classrooms) {
//     if (err) {
//       res.send(err);
//     } else {
//       code = compareCode(classrooms);
//       console.log("12345", code);
//       return code;
//     }
//   });
// }

//generating random classcode
function generateClassCode() {
    var code = "";
    var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i=0; i < 6; i++ ) {
      code += keys.charAt(Math.floor(Math.random() * keys.length));
    }
    return code;
}

//compare new classCode with existing classCode
function generateUniqueClassCode() {
  var nextCode;

  return Classroom.find({}).select('signUpCode -_id').exec()
    .then(function(existingCodes) {

      var matchingCodes = [];
      do {
        nextCode = generateClassCode();
        matchingCodes = existingCodes.filter(function(existingCode) {
          return existingCode.signUpCode === nextCode;
        });
      } while (matchingCodes.length > 0);

      return nextCode;
    });
}

// API ROUTES **********************************************************
var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');


var apiController   = require('../controllers/api');
var questionController   = require('../controllers/question');


// Users Resource
router.get('/users',                apiController.usersIndex);
router.get('/users/:id',            apiController.userShow);
router.put('/users/:id',            apiController.userEdit);
router.put('/users/:id/addclass',   apiController.userAddClassroom);


// Classrooms Resource
router.get( '/classrooms', apiController.classroomIndex);
router.post('/classrooms', apiController.classroomCreate);

// Question Resource
router.get('/classrooms/:id', questionController.questionIndex);
router.post('/classrooms/:id/questions', questionController.questionCreate);

module.exports = router;

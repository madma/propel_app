var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');
var apiController   = require('../controllers/api');
var questionController   = require('../controllers/question');


// STATIC PAGES (SERVER-SIDE RENDERING) ********************************
router.get('/', function(req, res) {
  res.redirect('/welcome');
});
router.get('/welcome', pagesController.welcome);
router.get('/team',    pagesController.team);
router.get('/test',    pagesController.test);
router.get('/first_time_login',    pagesController.loginTest);
router.get('/edituser',    pagesController.edituser);
router.get('/classroom', pagesController.classroom);

router.get('/test', pagesController.test);

// AUTH ROUTES (SIGN IN, LOG IN, LOG OUT) ******************************
router.get('/auth/linkedin', passport.authenticate('linkedin',
  function(req, res) {

  })
);

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/classroom',
  failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// API ROUTES **********************************************************

// Users Resource
router.get('/api/users',          apiController.usersIndex);
router.get('/api/users/:id',      apiController.userShow);
router.put('/api/users/:id',      apiController.userEdit);


// Classrooms Resource
router.get( '/api/classrooms', apiController.classroomIndex);
router.post('/api/classrooms', apiController.classroomCreate);

// Question Resource
router.get('/api/classrooms/:id', questionController.questionIndex);
router.put('/api/classrooms/:id', questionController.questionCreate);

module.exports = router;

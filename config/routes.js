var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');


// STATIC PAGES (SERVER-SIDE RENDERING) ********************************
router.get('/', function(req, res) {
  res.redirect('/welcome');
});
router.get('/welcome',   pagesController.welcome);
router.get('/team',      pagesController.team);
router.get('/classroom', authenticateUser, pagesController.classroom);

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

function authenticateUser(req, res, next) {
  console.log("Authenticating user...");

  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = router;

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var User = require('../models/user');


passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: process.env.LINKEDIN_CALLBACK,
  state: true,
  scope: ['r_basicprofile','r_emailaddress'],
  passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, cb) {
  req.session.accessToken = accessToken;
  process.nextTick(function(){
  User.findOne({'linkedInId': profile.id}, function(err,user) {
    if (err) return cb(err);
    if (user) {
      return cb(null, user);
    } else {
      var newUser = new User({
        linkedInId: profile.id,
        linkedInPublicProfileUrl: profile._json.publicProfileUrl,
        firstName: profile._json.firstName,
        lastName: profile._json.lastName,
        email: profile._json.emailAddress,
        institution: "Propel"
      });

      newUser.save(function(err) {
        if (err) return cb(err);
        return cb(null, newUser);
      })
    }
  })
  });
}));

//provide user data to session
passport.serializeUser(function(user, done){
  done(null, user.id);
  console.log(user);
  console.log(user.id);
});

//provide Passport with the user to assign to the req.user object
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    console.log(user)
    done(err, user);
  });
});


var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var db = require('.././database/model.js');
var authCtrl = require('.././database/authController.js');

require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((_id, done) => {
  db.Staff.findById(_id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/redirect',
  passReqToCallback: true
},
  (req, accessToken, refreshToken, profile, done) => {
    authCtrl.findOrCreate({ googleId: profile.id, sessionID: req.sessionID, email: profile.emails[0].value}, function (err, user) {
      return done(err, user);
    });
  }
));

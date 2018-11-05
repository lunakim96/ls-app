const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000
const server = http.Server(app);
const passport = require('passport');
const passportConfig = require('./passport-config');
const authCtrl = require('.././database/authController.js');
const db = require('.././database/model.js');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config();

server.listen(port);

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.use(passport.initialize());
app.use(passport.session());

//Google authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/redirect',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect('/');
  });

//Login endpoint
app.get('/login', (req, res) => {
  var theCurrentUser = req.user;
  res.send(theCurrentUser);
});

//Logout endpoint
app.get('/logout', (req, res) => {
  authCtrl.logout(req.sessionID, (err) => {
    if (err) {
      res.status(501).send('Could not log out');
    } else {
      res.status(200).send(false);
    }
  });
});

//Check session endpoint
app.get('/session', (req, res) => {
  db.Staff.findOne({ sessionID: req.sessionID}, (err, staff) => {
    if (staff) {
      res.send({signedIn: true, email: staff.email});
    } 
  });
});
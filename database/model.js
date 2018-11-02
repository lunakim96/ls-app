const mongoose = require('mongoose');

let url = process.env.MONGODB_URI || 'mongodb://localhost/lsApp';
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const staffSchema = mongoose.Schema({
    googleId: String,
    sessionID: String,
    email: String,
  });

const Staff = mongoose.model('Email', staffSchema);

db.once('open', function() {
    console.log('Connected to mongo');
  });

module.exports.Staff = Staff;
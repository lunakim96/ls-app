const db = require('./model.js')


const findOrCreate = (query, callback) => {
  db.Staff.findOne({ googleId: query.googleId }, (err, staff) => {

    if (!staff && query.email.includes('@ljcds.org')) {
      let newStaff = new db.Staff({
        googleId: query.googleId,
        sessionID: query.sessionID,
        email: query.email,
      });

      newStaff.save(function(err, staff) {
        callback(err, staff);
      });
    } 
    else if (!query.email.includes('@ljcds.org')) {
        callback('Access Denied Registered LJCDS Staff ONLY');
    }
    else {
      staff.sessionID = query.sessionID;
      staff.save(function(err, staff) {
        callback(err, staff)
      })
    }
  });
};

const logout = (sessionID, callback) => {
  db.Staff.update({ sessionID: sessionID }, { $set: { sessionID: ''}}, callback);
};

module.exports.findOrCreate = findOrCreate;
module.exports.logout = logout;

//&& query.email.includes('@ljcds.org') 
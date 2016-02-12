var mongoose = require('mongoose');

mongoose.connect('mongoose://localhost/shortly-deploy');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('db connction open');
});

module.exports = db;

      

  user.string('username', 100).unique();
      user.string('password', 100);


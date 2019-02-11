const mongoose = require('mongoose');

const mong = mongoose.connect('mongodb://gingerneale:chatdb1@ds159812.mlab.com:59812/chatdb', (err) => {
  if (err) throw err;
  console.log("Connected!"); // eslint-disable-line no-console
});

mongoose.Promise = global.Promise;

module.exports = mong;

//Import connect and connection from mongoose
const { connect, connection } = require('mongoose');

//Configure connect
connect('mongodb://localhost/RedSocialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection; //Export connection
// This model will serve as a blueprint showing
// what all users in your database will look like.

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

// By specifying mongoose.model('User', UserSchema) you’re binding
// the layout of the schema to the model which is named 'User'.
// This is what you will be using to access the data in the database,
// and that’s exactly why you are exporting it to use in other parts of your program.

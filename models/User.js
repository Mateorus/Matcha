const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: { type: String, required: true},
  name: { type: String, required: true },
  lastName: { type:	String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.statics.findByLogin = function(login) {
  return this.findOne({ login: new RegExp(`^${login}$`, 'i') }).exec();
}

userSchema.statics.findByEmail = function(email) {
  return this.find({ email: new RegExp(`^${email}$`, 'i') });
}
const User = mongoose.model('User', userSchema);

module.exports = User;

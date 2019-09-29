const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  surname: String
});

userSchema.methods.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
};

const User = mongoose.model('User', userSchema);

module.exports = User;

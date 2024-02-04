const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // other fields as per your form
});

module.exports = mongoose.model('User', userSchema);
  
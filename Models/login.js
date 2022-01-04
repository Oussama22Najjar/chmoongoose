const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: String,
  email: String,
  fullName: String,
  Birthday: Date,
  adress: String,
  password: String,
});

module.exports = login = mongoose.model("logins", loginSchema);

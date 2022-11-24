const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const bcrypt = require("bcryptjs");
// const moment = require('moment');


const usersSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  address: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    required: true
  },
  allow: {
    type: Boolean,
    default:false
  }
});

// generating a hash
usersSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
};

// checking if password is valid
usersSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

exports.Users = mongoose.model("Users", usersSchema);

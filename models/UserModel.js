const mongoose = require("mongoose");
const {
  Schema
} = mongoose;

const userSchema = new Schema({
  username: {
    type: String
  },
  githubId: {
    type: String
  },
  password: {
    type: String
  }
})

const User = mongoose.model("UserModl", userSchema);
module.exports = User;
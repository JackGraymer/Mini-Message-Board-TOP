// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Messages = mongoose.model("Messages", MessageSchema);

module.exports = Messages;

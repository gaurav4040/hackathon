const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["candidate", "alumni", "admin"],
    default: "candidate",
  },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);

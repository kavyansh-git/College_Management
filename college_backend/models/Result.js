// models/Result.js
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  rollNo: { type: String, required: true },
  exam: { type: String, required: true },
  subjects: [
    {
      name: { type: String, required: true },
      marks: { type: String, required: true },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);

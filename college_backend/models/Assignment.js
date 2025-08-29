const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  title: String,
  fileUrl: String,
  fileType: String,
  publicId: String,
  batch: String,
  branch: String,
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const assignmentModel = mongoose.model("Assignment", assignmentSchema);

module.exports = assignmentModel;

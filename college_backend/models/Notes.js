const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: String,
  fileUrl: String,
  fileType: String,
  publicId: String,
  batch: String,
  branch: String,
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const notesModel = mongoose.model("Notes", notesSchema);

module.exports = notesModel;

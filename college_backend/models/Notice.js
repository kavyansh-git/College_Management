const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: String,
  fileUrl: String,
  fileType: String,
  publicId: String,
  batch: String,
  branch: String,
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const noticeModel = mongoose.model("Notice", noticeSchema);

module.exports = noticeModel;

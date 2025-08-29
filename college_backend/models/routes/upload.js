const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./utils/cloudinary");
const Notice = require("../Notice");

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => ({
  folder: "faculty_notices",
  allowed_formats: ["pdf"],
  public_id: `${Date.now()}-${file.originalname}`,
}),
});

const upload = multer({ storage });

router.post("/pdf/upload/Notice", upload.single("file"), async (req, res) => {

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);


  try {
    const { title, batch, branch } = req.body;

    // Validate required fields
    if (!title || !batch || !branch) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Validate file
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const notice = new Notice({
      title,
      fileUrl: req.file.path || req.file.url,
      fileType: req.file.mimetype,
      publicId: req.file.filename || req.file.public_id,
      batch,
      branch,
    });

    await notice.save();

    return res.status(201).json({ message: "Notice uploaded successfully", notice });
  } catch (error) {
    console.error("Upload error:", error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;

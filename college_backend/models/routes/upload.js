const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./utils/cloudinary");
const Notice = require("../../models/Notice");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "faculty_notices",
    allowed_formats: ["pdf"],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });

router.post("/notice", upload.single("file"), async (req, res) => {
  const { title, batch, branch } = req.body;
  console.log(req.body);
  console.log(req.file);

  const notice = new Notice({
    title,
    fileUrl: req.file.path,
    fileType: req.file.mimetype,
    publicId: req.file.filename,
    batch,
    branch,
  });

  await notice.save();
  return res.status(201).json({ message: "Notice uploaded", notice });
});

module.exports = router;

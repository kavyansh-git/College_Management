const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./utils/cloudinary");
const Notice = require("../Notice");
const Assignment = require("../Assignment");
const Notes = require("../Notes");

const noticeStorage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => ({
  folder: "faculty_notices",
  allowed_formats: ["pdf"],
  public_id: `${Date.now()}-${file.originalname}`,
}),
});

const uploadNotice = multer({ storage: noticeStorage });

router.post("/pdf/upload/Notice", uploadNotice.single("file"), async (req, res) => {

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
      fileUrl: req.file.url || req.file.secure_url || req.file.path,
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

const assignmentStorage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => ({
  folder: "faculty_assignments",
  allowed_formats: ["pdf"],
  public_id: `${Date.now()}-${file.originalname}`,
}),
});

const uploadAssignment = multer({ storage: assignmentStorage });

router.post("/pdf/upload/Assignment", uploadAssignment.single("file"), async (req, res) => {

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

    const assignment = new Assignment({
      title,
      fileUrl: req.file.url || req.file.secure_url || req.file.path,
      fileType: req.file.mimetype,
      publicId: req.file.filename || req.file.public_id,
      batch,
      branch,
    });

    await assignment.save();

    return res.status(201).json({ message: "Assignment uploaded successfully", assignment });
  } catch (error) {
    console.error("Upload error:", error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

const noteStorage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => ({
  folder: "faculty_notes",
  allowed_formats: ["pdf"],
  public_id: `${Date.now()}-${file.originalname}`,
}),
});

const uploadNote = multer({ storage: noteStorage });

router.post("/pdf/upload/Notes", uploadNote.single("file"), async (req, res) => {

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

    const note = new Notes({
      title,
      fileUrl: req.file.url || req.file.secure_url || req.file.path,
      fileType: req.file.mimetype,
      publicId: req.file.filename || req.file.public_id,
      batch,
      branch,
    });

    await note.save();

    return res.status(201).json({ message: "Notes uploaded successfully", note });
  } catch (error) {
    console.error("Upload error:", error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;

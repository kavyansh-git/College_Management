const express = require("express");
const router = express.Router();
const Notice = require("../../models/Notice");
const Assignment = require("../../models/Assignment");
const Notes = require("../../models/Notes");
const Result = require("../../models/Result");

// GET all notices
router.get("/notices", async (req, res) => {
  try {
    const { batch, branch, title } = req.query;

    // Build dynamic filter object
    const filter = {};
    if (batch) filter.batch = batch;
    if (branch) filter.branch = branch;
    if (title) filter.title = { $regex: title, $options: "i" }; // case-insensitive search

    const notices = await Notice.find(filter);
    res.status(200).json(notices);
  } catch (error) {
    console.error("Error fetching notices:", error.message);
    res.status(500).json({ message: "Failed to fetch notices", error: error.message });
  }
});

// GET all assignments
router.get("/assignments", async (req, res) => {
  try {
    const { batch, branch, title } = req.query;

    // Build dynamic filter object
    const filter = {};
    if (batch) filter.batch = batch;
    if (branch) filter.branch = branch;
    if (title) filter.title = { $regex: title, $options: "i" }; // case-insensitive search

    const assignments = await Assignment.find(filter);
    res.status(200).json(assignments);
  } catch (error) {
    console.error("Error fetching assignments:", error.message);
    res.status(500).json({ message: "Failed to fetch assignments", error: error.message });
  }
});

// GET all notes
router.get("/notes", async (req, res) => {
  try {
    const { batch, branch, title } = req.query;

    // Build dynamic filter object
    const filter = {};
    if (batch) filter.batch = batch;
    if (branch) filter.branch = branch;
    if (title) filter.title = { $regex: title, $options: "i" }; // case-insensitive search

    const notes = await Notes.find(filter);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    res.status(500).json({ message: "Failed to fetch notes", error: error.message });
  }
});

// GET all results
router.get("/results", async (req, res) => {
  try {
    const { rollNo } = req.query;

    // Build dynamic filter object
    const filter = {};
    if (rollNo) filter.rollNo = rollNo;

    const results = await Result.find(filter);
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching results:", error.message);
    res.status(500).json({ message: "Failed to fetch results", error: error.message });
  }
});

module.exports = router;

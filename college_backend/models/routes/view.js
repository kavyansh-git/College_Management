const express = require("express");
const router = express.Router();
const Notice = require("../../models/Notice");

// GET all notices
router.get("/notices", async (req, res) => {
  try {
    const { batch, branch, title } = req.query;

    // Build dynamic filter object
    const filter = {};
    if (batch) filter.batch = batch;
    if (branch) filter.branch = branch;
    if (title) filter.title = { $regex: title, $options: "i" }; // case-insensitive search

    const notices = await Notice.find(filter).sort({ createdAt: -1 });
    res.status(200).json(notices);
  } catch (error) {
    console.error("Error fetching notices:", error.message);
    res.status(500).json({ message: "Failed to fetch notices", error: error.message });
  }
});


module.exports = router;

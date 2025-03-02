const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../Song");
const User = require("../User");
const Student = require("../Student");
const Admin = require("../Admin");

router.post("/createStudent", passport.authenticate("jwt", {session: false}), async (req, res) => {
    // req.admin gets the admin because of passport.authenticate
    const{ firstName, lastName, rollNo, password } = req.body;
    if( !firstName || !lastName || !rollNo || !password) {
        return res
            .status(301)
            .json({err: "Insufficient details to create student."});
    }
    // const admin = req.admin._id;
    const studentDetails = { firstName, lastName, rollNo, password };
    const createdStudent = await Student.create(studentDetails);
    return res.status(200).json(createdStudent);
});

/* // Get route to get all songs i have published.
router.get(
    "/get/mysongs",
     passport.authenticate("jwt", {session: false}),
     async (req, res) => {
        // We need to get all songs where artist  id == currentUser._id
        const songs = await Song.find({artist: req.user._id}).populate("artist");
        return res.status(200).json({data: songs});
    }
); */

 // Get route to get all songs any artist has published
 // I will send the artist id and I want to see all songs that artist has published
 /* router.get(
    "/get/artist/:artistId",
     passport.authenticate("jwt", {session: false}),
     async (req, res) => {  
        const artistId = req.params.artistId;
        
        // We can check if the artist doesn't exist.
        const artist = await User.findOne({_id: artistId});
        if (!artist) {
            return res.status(301).json({err: "Artist does not exist"});
        } 

        const songs = await Song.find({artist: artistId});
        return res.status(200).json({data: songs});
    }
); */

 // Get route to get a single student by name
 router.get(
    "/get/studentname/:studentName",
     passport.authenticate("jwt", {session: false}),
     async (req, res) => {
        const studentName = req.params.studentName;

        // name: studentName --> exact name matching. Vanilla, Vanila
        // pattern matching instead of direct name matching.        
        const students = await Student.find({firstName: studentName}).populate("firstName");
        return res.status(200).json({data: students});
    }
);

module.exports = router;
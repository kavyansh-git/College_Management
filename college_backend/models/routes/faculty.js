const express = require("express");
const router = express.Router();
const passport = require("passport");
const {getToken} = require("./utils/helpers");
const bcrypt = require("bcrypt");
const Faculty = require("../Faculty");
const Admin = require("../Admin");

router.post("/facultyRegister",
     async (req, res) => {
    
    // This code is run when the /facultyRegister API is called as POST request
    //My req.body will be of the format { firstName, lastName, facultyId, password }

    // Step 1 : check whether the request has all the required fields.
        const {
      firstName,
      lastName,
      facultyId,
      regNo,
      email,
      password,
      department,
      yearOfJoining,
      specialization,
      qualification,
      experience,
      nationality,
      religion,
      caste,
      dob,
      fatherName,
      motherName,
      permanentAddress,
      mailingAddress,
      contactNo
    } = req.body;

            if( !firstName || !lastName || !facultyId || !password) {
                return res
                    .status(301)
                    .json({err: "Insufficient details to create a faculty."});
               }
    
    // Step 2 : Does a faculty with this facultyId already exist? If yes, we throw an error.
        const faculty = await Faculty.findOne({ facultyId: facultyId });
            if (faculty) {
                // status code by default is 200
                return res
                    .status(403)
                    .json({error:"A faculty with this Faculty ID already exists"});
                }
    
    // This is a valid request
    
    // Step 3: create a new faculty in the DB
    // Step 3.1: we do not store passwords in plain text.
    // xyz: we convert the plain text password to a hash.
    // xyz -->skjdhfkshdfkjshkdfhshdjkhkj
    // My hash of xyz depends on 2 parameters.
    // If i keep those 2 parameters same then xyz ALWAYS gives the same hash.
    
     // const admin = req.admin._id;
        const hashedPassword = await bcrypt.hash(password,10);
        const newFacultyData = {
      firstName,
      lastName,
      facultyId,
      regNo,
      email,
      password: hashedPassword,
      department,
      yearOfJoining,
      specialization,
      qualification,
      experience,
      nationality,
      religion,
      caste,
      dob,
      fatherName,
      motherName,
      permanentAddress,
      mailingAddress,
      contactNo
    };
        const newFaculty = await Faculty.create(newFacultyData);

    // Step 4: we want to create a token to return to the faculty.
        const token = await getToken(facultyId, newFaculty);
    
    //Step 5: return the result to the faculty.
        const facultyToReturn = {...newFaculty.toJSON(), token}; 
        delete facultyToReturn.password;
        return res.status(200).json(facultyToReturn);
});

router.post("/facultyLogin" ,
     async(req , res) => {

    //Step1: get facultyId and password sent by faculty from req.body
        const{facultyId , password} = req.body;

    //Step2: Check if a faculty with the given facultyId exists , if not then the credentials are invalid.
        const faculty = await Faculty.findOne({facultyId: facultyId});
            if(!faculty) {
                return res.status(403).json({err: "Invalid credentials"});
            }

    // Step3: if the faculty exists , check if the password is correct, if not then the credentials are invaid.
    // This is a tricky step. Why? Because we have stored the original password in a hashed form which we cannot restore back to original form.
    // I cannot do: if(password === user.password)
    // bcrypt.compare enabled us to compare 1 password in plaintext (password from req.body) to a hashed password (the one in our db) securely.
    
        const isPasswordValid = await bcrypt.compare(password, faculty.password);
    // This will be true or false.
        if(!isPasswordValid) {
            return res.status(403).json({err: "Invalid credentials"});
        }

    // Step4: if the credentials are correct , return a token to the user.
        const token = await getToken(faculty.facultyId, faculty);
        const facultyToReturn = {...faculty.toJSON(), token}; 
        delete facultyToReturn.password;
        return res.status(200).json(facultyToReturn); 
});

// Get route to get info about the currently logged in faculty
router.get(
  "/getFaculty/:facultyId",
    
    async (req, res) => {
    
        const facultyId = req.params.facultyId;

        // We can check if the facultyId is valid or not.
        const faculty = await Faculty.findOne({ _id: facultyId });
        if (!faculty) {
            return res.status(301).json({err: "Faculty does not exist"});
        }
        const facultyToReturn = {...faculty.toJSON()};

        return res.status(200).json(facultyToReturn);        
  }
);

// Get route to get all facultys i have created.
router.get(
    "/get/myfacultys",
     passport.authenticate("faculty", {session: false}),
     async (req, res) => {
        // We need to get all facultys where admin  id == currentAdmin._id
        const facultys = await Faculty.find({admin: req.admin._id}).populate("admin");
        return res.status(200).json({data: facultys});
    }
);

 // Get route to get all facultys any admin has created
 // I will send the admin id and I want to see all facultys that admin has published
 router.get(
    "/get/admin/:adminId",
     passport.authenticate("faculty", {session: false}),
     async (req, res) => {  
        const adminId = req.params.adminId;
        
        // We can check if the admin doesn't exist.
        const admin = await Admin.findOne({_id: adminId});
        if (!admin) {
            return res.status(301).json({err: "Admin does not exist"});
        } 

        const facultys = await Faculty.find({admin: adminId});
        return res.status(200).json({data: facultys});
    }
);

 // Get route to get a single faculty by name
 router.get(
    "/get/facultyname/:facultyName",
     passport.authenticate("faculty", {session: false}),
     async (req, res) => {
        const facultyName = req.params.facultyName;

        // name: facultyName --> exact name matching. Vanilla, Vanila
        // pattern matching instead of direct name matching.        
        const facultys = await Faculty.find({firstName: facultyName}).populate("firstName");
        return res.status(200).json({data: facultys});
    }
);

module.exports = router;
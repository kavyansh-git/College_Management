const express = require("express");
const router = express.Router();
const passport = require("passport");
const {getToken} = require("./utils/helpers");
const bcrypt = require("bcrypt");
const Student = require("../Student");
const Admin = require("../Admin");

router.post("/studentRegister",
     async (req, res) => {
    
    // This code is run when the /studentRegister API is called as POST request
    //My req.body will be of the format { firstName, lastName, rollNo, password }

    // Step 1 : check whether the request has all the required fields.
        const {
      firstName,
      lastName,
      rollNo,
      regNo,
      email,
      password,
      course,
      batch,
      branch,
      nationality,
      religion,
      caste,
      dob,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      permanentAddress,
      mailingAddress,
      contactNoStudent,
      contactNoParents
    } = req.body;
            if( !firstName || !lastName || !rollNo || !password) {
                return res
                    .status(301)
                    .json({err: "Insufficient details to create a student."});
               }
    
    // Step 2 : Does a student with this rollNo already exist? If yes, we throw an error.
        const student = await Student.findOne({ rollNo: rollNo });
            if (student) {
                // status code by default is 200
                return res
                    .status(403)
                    .json({error:"A student with this Roll No. already exists"});
                }
    
    // This is a valid request
    
    // Step 3: create a new student in the DB
    // Step 3.1: we do not store passwords in plain text.
    // xyz: we convert the plain text password to a hash.
    // xyz -->skjdhfkshdfkjshkdfhshdjkhkj
    // My hash of xyz depends on 2 parameters.
    // If i keep those 2 parameters same then xyz ALWAYS gives the same hash.
    
     // const admin = req.admin._id;
        const hashedPassword = await bcrypt.hash(password,10);
        const newStudentData = {
      firstName,
      lastName,
      rollNo,
      regNo,
      email,
      password: hashedPassword,
      course,
      batch,
      branch,
      nationality,
      religion,
      caste,
      dob,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      permanentAddress,
      mailingAddress,
      contactNoStudent,
      contactNoParents
    };
        const newStudent = await Student.create(newStudentData);

    // Step 4: we want to create a token to return to the student.
        const token = await getToken(rollNo, newStudent);
    
    //Step 5: return the result to the student.
        const studentToReturn = {...newStudent.toJSON(), token}; 
        delete studentToReturn.password;
        return res.status(200).json(studentToReturn);
});

router.post("/studentLogin" ,
     async(req , res) => {

    //Step1: get rollNo and password sent by student from req.body
        const{rollNo , password} = req.body;

    //Step2: Check if a student with the given rollNo exists , if not then the credentials are invalid.
        const student = await Student.findOne({rollNo: rollNo});
            if(!student) {
                return res.status(403).json({err: "Invalid credentials"});
            }

    // Step3: if the student exists , check if the password is correct, if not then the credentials are invaid.
    // This is a tricky step. Why? Because we have stored the original password in a hashed form which we cannot restore back to original form.
    // I cannot do: if(password === user.password)
    // bcrypt.compare enabled us to compare 1 password in plaintext (password from req.body) to a hashed password (the one in our db) securely.
    
        const isPasswordValid = await bcrypt.compare(password, student.password);
    // This will be true or false.
        if(!isPasswordValid) {
            return res.status(403).json({err: "Invalid credentials"});
        }

    // Step4: if the credentials are correct , return a token to the user.
        const token = await getToken(student.rollNo, student);
        const studentToReturn = {...student.toJSON(), token}; 
        delete studentToReturn.password;
        return res.status(200).json(studentToReturn); 
});

// Get route to get info about the currently logged in student
router.get(
  "/getStudent/:studentId",
    
    async (req, res) => {
    
        const studentId = req.params.studentId;

        // We can check if the studentId is valid or not.
        const student = await Student.findOne({ _id: studentId });
        if (!student) {
            return res.status(301).json({err: "Student does not exist"});
        }
        const studentToReturn = {...student.toJSON()};

        return res.status(200).json(studentToReturn);        
  }
);

// Get route to get all students i have created.
router.get(
    "/get/mystudents",
     passport.authenticate("student", {session: false}),
     async (req, res) => {
        // We need to get all students where admin  id == currentAdmin._id
        const students = await Student.find({admin: req.admin._id}).populate("admin");
        return res.status(200).json({data: students});
    }
);

 // Get route to get all students any admin has created
 // I will send the admin id and I want to see all students that admin has published
 router.get(
    "/get/admin/:adminId",
     passport.authenticate("student", {session: false}),
     async (req, res) => {  
        const adminId = req.params.adminId;
        
        // We can check if the admin doesn't exist.
        const admin = await Admin.findOne({_id: adminId});
        if (!admin) {
            return res.status(301).json({err: "Admin does not exist"});
        } 

        const students = await Student.find({admin: adminId});
        return res.status(200).json({data: students});
    }
);

 // Get route to get a single student by name
 router.get(
    "/get/studentname/:studentName",
     passport.authenticate("student", {session: false}),
     async (req, res) => {
        const studentName = req.params.studentName;

        // name: studentName --> exact name matching. Vanilla, Vanila
        // pattern matching instead of direct name matching.        
        const students = await Student.find({firstName: studentName}).populate("firstName");
        return res.status(200).json({data: students});
    }
);

module.exports = router;
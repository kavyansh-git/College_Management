const express = require("express");
const router = express.Router();
const Student = require("../Student");
const {getToken} = require("./utils/helpers");
const bcrypt = require("bcrypt");

// This POST route will help to register a student
router.post("/studentRegister", async (req, res) => {
    // This code is run when the /studentRegister API is called as POST request
    //My req.body will be of the format{ firstName, lastName, rollNo, password }
    const { firstName, lastName, rollNo, password } = req.body;

    // Step 2 : Does a student with this rollNo already exist? If yes, we throw an error.
    const student = await Student.findOne({ rollNo: rollNo });
        if (student) {
            // status code by default is 200
            return res.status(403).json({error:"A student with this Roll No. already exists"});
            }
        
    
    // This is a valid request
    // Step 3: create a new user in the DB
    // Step 3.1: we do not store passwords in plain text.
    // xyz: we convert the plain text password to a hash.
    // xyz -->skjdhfkshdfkjshkdfhshdjkhkj
    // My hash of xyz depends on 2 parameters.
    // If i keep those 2 parameters same then xyz ALWAYS gives the same hash.
    
    const hashedPassword = await bcrypt.hash(password,10);
    const newStudentData = { 
          firstName,
          lastName,
          rollNo,
          password: hashedPassword };
    const newStudent = await Student.create(newStudentData);

    // Step 4: we want to create a token to return to the student.
    const token = await getToken(rollNo, newStudent);

    //Step 5: return the result to the student.
    const studentToReturn = {...newStudent.toJSON(), token}; 
    delete studentToReturn.password;
    return res.status(200).json(studentToReturn); 


});

router.post("/studentLogin" , async(req , res) => {
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

module.exports = router;
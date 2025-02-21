const express = require("express");
const router = express.Router();
const Faculty = require("../Faculty");
const {getToken} = require("./utils/helpers");
const bcrypt = require("bcrypt");

// This POST route will help to register a faculty
router.post("/facultyRegister", async (req, res) => {
    // This code is run when the /register API is called as POST request
    //My req.body will be of the format{ firstName, lastName, facultyId, password }
    const { firstName, lastName, facultyId, password } = req.body;

    // Step 2 : Does a faculty with this facultyId already exist? If yes, we throw an error.
    const faculty = await Faculty.findOne({ facultyId: facultyId });
        if (faculty) {
            // status code by default is 200
            return res.status(403).json({error:"A faculty with this facultyId already exists"});
            }
        
    
    // This is a valid request
    // Step 3: create a new user in the DB
    // Step 3.1: we do not store passwords in plain text.
    // xyz: we convert the plain text password to a hash.
    // xyz -->skjdhfkshdfkjshkdfhshdjkhkj
    // My hash of xyz depends on 2 parameters.
    // If i keep those 2 parameters same then xyz ALWAYS gives the same hash.
    
    const hashedPassword = await bcrypt.hash(password,10);
    const newFacultyData = { 
          firstName,
          lastName,
          facultyId,
          password: hashedPassword };
    const newFaculty = await Faculty.create(newFacultyData);

    // Step 4: we want to create a token to return to the faculty.
    const token = await getToken(facultyId, newFaculty);

    //Step 5: return the result to the faculty.
    const facultyToReturn = {...newFaculty.toJSON(), token}; 
    delete facultyToReturn.password;
    return res.status(200).json(facultyToReturn); 


});

router.post("/facultyLogin" , async(req , res) => {
    //Step1: get facultyId and password sent by faculty from req.body
    const{facultyId , password} = req.body;
    //Step2: Check if a faculty with the given facultyId exists , if not then the credentials are invalid.
    const faculty = await Faculty.findOne({facultyId: facultyId});
    if(!faculty) {
        return res.status(403).json({err: "Invalid credentials"});
    }
    // Step3: if the user exists , check if the password is correct, if not then the credentials are invaid.
    // This is a tricky step. Why? Because we have stored the original password in a hashed form which we cannot restore back to original form.
    // I cannot do: if(password === user.password)
    // bcrypt.compare enabled us to compare 1 password in plaintext (password from req.body) to a hashed password (the one in our db) securely.
    
    const isPasswordValid = await bcrypt.compare(password, faculty.password);
    // This will be true or false.
    if(!isPasswordValid) {
        return res.status(403).json({err: "Invalid credentials"});
    }
    // Step4: if the credentials are correct , return a token to the faculty.
    const token = await getToken(faculty.facultyId, faculty);
    const facultyToReturn = {...faculty.toJSON(), token}; 
    delete facultyToReturn.password;
    return res.status(200).json(facultyToReturn); 
});

module.exports = router;
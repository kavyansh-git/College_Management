const express = require("express");
const router = express.Router();
const Admin = require("../Admin");
const {getToken} = require("./utils/helpers");
const bcrypt = require("bcrypt");

// This POST route will help to register a admin
router.post("/adminRegister", async (req, res) => {
    // This code is run when the /register API is called as POST request
    //My req.body will be of the format{ adminId, password }
    const { adminId, password } = req.body;

    // Step 2 : Does an admin with this adminId already exist? If yes, we throw an error.
    const admin = await Admin.findOne({ adminId: adminId });
        if (admin) {
            // status code by default is 200
            return res.status(403).json({error:"An admin with this adminId already exists"});
            }
        
    
    // This is a valid request
    // Step 3: create a new user in the DB
    // Step 3.1: we do not store passwords in plain text.
    // xyz: we convert the plain text password to a hash.
    // xyz -->skjdhfkshdfkjshkdfhshdjkhkj
    // My hash of xyz depends on 2 parameters.
    // If i keep those 2 parameters same then xyz ALWAYS gives the same hash.
    
    const hashedPassword = await bcrypt.hash(password,10);
    const newAdminData = { 
          adminId,
          password: hashedPassword };
    const newAdmin = await Admin.create(newAdminData);

    // Step 4: we want to create a token to return to the admin.
    const token = await getToken(adminId, newAdmin);

    //Step 5: return the result to the admin.
    const adminToReturn = {...newAdmin.toJSON(), token}; 
    delete adminToReturn.password;
    return res.status(200).json(adminToReturn); 


});

router.post("/adminLogin" , async(req , res) => {
    //Step1: get adminId and password sent by admin from req.body
    const{adminId , password} = req.body;
    //Step2: Check if an admin with the given adminId exists , if not then the credentials are invalid.
    const admin = await Admin.findOne({adminId: adminId});
    if(!admin) {
        return res.status(403).json({err: "Invalid credentials"});
    }
    // Step3: if the user exists , check if the password is correct, if not then the credentials are invaid.
    // This is a tricky step. Why? Because we have stored the original password in a hashed form which we cannot restore back to original form.
    // I cannot do: if(password === user.password)
    // bcrypt.compare enabled us to compare 1 password in plaintext (password from req.body) to a hashed password (the one in our db) securely.
    
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    // This will be true or false.
    if(!isPasswordValid) {
        return res.status(403).json({err: "Invalid credentials"});
    }
    // Step4: if the credentials are correct , return a token to the admin.
    const token = await getToken(admin.adminId, admin);
    const adminToReturn = {...admin.toJSON(), token}; 
    delete adminToReturn.password;
    return res.status(200).json(adminToReturn); 
});

module.exports = router;
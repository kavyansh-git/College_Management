const mongoose = require("mongoose");

const Faculty = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    facultyId: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: false,
    },
    yearOfJoining: {
        type: String,
        required: false,
    },
    regNo: {
        type: String,
        required: false,
    },
    qualification: {
        type: String,
        required: false,
    },
    experience: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    fatherName: {
        type: String,
        required: false,
    },
    motherName: {
        type: String,
        required: false,
    },
    specialization: {
        type: String,
        required: false,
    },
    permanentAddress: {
        type: String,
        required: false,
    },
    mailingAddress: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    contactNo: {
        type: String,
        required: false,   
    },    
    profileImage: {
        type: String,
        required: false,
    },
    nationality: {
        type: String,
        required: false,
    },
    religion: {
        type: String,
        required: false,
    },
    caste: {
        type: String,
        required: false,
    },
    dob: {
        type: String,
        required: false,
    }
});

const facultyModel = mongoose.model("Faculty" , Faculty);

module.exports = facultyModel;

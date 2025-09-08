const mongoose = require("mongoose");

const Student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: false,
    },
    batch: {
        type: String,
        required: false,
    },
    branch: {
        type: String,
        required: false,
    },
    regNo: {
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
    fatherOccupation: {
        type: String,
        required: false,
    },
    motherOccupation: {
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
    contactNoStudent: {
        type: String,
        required: false,   
    },
    contactNoParents: {
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
    },
    gender: {
        type: String,
        required: false,
    },
    attendance: {
        type: String,
        required: false,
        default: "0%",
    }
});

const studentModel = mongoose.model("Student" , Student);

module.exports = studentModel;

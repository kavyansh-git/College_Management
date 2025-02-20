const mongoose = require("mongoose");

const Faculty = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: true,
    },
    facultyId: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
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
        required: true,
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
    contactNoFaculty: [
            {
            type: String,
            required: false,   
            }
    ],
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
    }
});

const facultyModel = mongoose.model("Faculty" , Faculty);

module.exports = facultyModel;

const mongoose = require("mongoose");

const Student = new mongoose.Schema({
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
    rollNo: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    regNo: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    mailingAddress: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNoStudent: [
            {
            type: String,
            required: false,   
            }
    ],
    contactNoParents: [
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

const studentModel = mongoose.model("Student" , Student);

module.exports = studentModel;

const mongoose = require("mongoose");

const Faculty = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    facultyId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    dept: {
        type: String,
        default: "",
    },
    specialization: {
        type: String,
        default: "",
    },    
    fatherName: {
        type: String,
        default: "",
    },
    motherName: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    }
});

const facultyModel = mongoose.model("Faculty" , Faculty);

module.exports = facultyModel;

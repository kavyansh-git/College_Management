const mongoose = require("mongoose");

const Student = new mongoose.Schema({
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
    roll_no: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    branch: {
        type: String,
        default: "",
    },
    batch: {
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

const studentModel = mongoose.model("Student" , Student);

module.exports = studentModel;

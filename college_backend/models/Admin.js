const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
    adminId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    }    
});

const adminModel = mongoose.model("Admin" , Admin);

module.exports = adminModel;

const mongoose = require("mongoose");

const Register = mongoose.model(
    'Register',
    new mongoose.Schema({
        username: {type: String, unique: true, required: true},
        fullName: {type: String, required: true},
        mobileNo: {type: Number, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        // cpassword: {type: String, required: true},
        role: {type: String, required: true, default: 'user'},
    })
)

module.exports= Register
const mongoose = require("mongoose");

const Register = mongoose.model(
    'Register',
    new mongoose.Schema({
        email: {type: String,unique: true, required: true},
        mobileNo: {type: Number,unique: true, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true},
        // cpassword: {type: String, required: true},
        role: {type: String, required: true, default: 'user'},
    },{timestamps: true})
)

module.exports= Register
const Register = require('../Models/RegisterModel')

const bcrypt = require('bcrypt')

exports.addNewUser = [async (req,res)=>{
    const newUser = new Register({
        username: req.body.username,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 8),
        role: req.body.role
    })

    newUser.save()
    .then(()=>{
        return res.status(201).json({message: "User registered successfully"});
    })
    .catch((err)=>{
        return res.status(409).json({error: "User already exists!"})

    })
}]
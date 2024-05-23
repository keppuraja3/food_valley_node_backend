const Register = require('../Models/RegisterModel')

const bcrypt = require('bcrypt')

exports.addNewUser = [async (req,res)=>{
    const newUser = new Register({
        username: req.body.username,
        fullName: req.body.fullName,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: req.body.role
    })

    newUser.save()
    .then(()=>{
        return res.status(200).send("User registered successfully")
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]
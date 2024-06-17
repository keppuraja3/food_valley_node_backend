const User = require('../Models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// New user registration

exports.addNewUser = [async (req,res)=>{
    const newUser = new User({
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

// User login

exports.userLogin = [async (req, res)=>{
    try{
        
        const {mobileNo, password}= req.body;

        const user = await User.findOne({mobileNo})
        
        if(!user){
            return res.status(401).json({error: 'User is not registered'})
        }

        // comparing the password 
        const passwordMatch = await bcrypt.compare(password, user.password)

        if(!passwordMatch){
            return res.status(401).json({error: 'Password does not match'})
        }

        // Generating login token
        const token = jwt.sign({
            userId: user._id,
            username: user.username,
            email: user.email,
            mobileNo: user.mobileNo,
            role: user.role
        },process.env.SECRET_KEY,{
            expiresIn: '1h',
        });

         // Sending token as cookie
         res.cookie('token', token, {
            maxAge: 1000 * 60 * 60, // 1 hour
            httpOnly: true, // Cookie cannot be accessed via client-side scripts
            secure: false, // Set to true if you are using HTTPS
            sameSite: 'strict' // Cookie will be sent only to the same site
        });

        res.status(200).json({status: true, token: token ,role: user.role, message: "Login successfully"});

    }catch(err){
        if (err) throw err
        return res.status(500).json({error: "Login faild"})
    }
}]

// View all user list

exports.viewList =[async (req,res)=>{

    await User.find()
    .then((users)=>{
        return res.status(200).send(users)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

// Update a User

exports.updateUser=[async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id, {$set:{
        username: req.body.username,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 8),
        role: req.body.role
    }},{new: true} )
    .then((updatedUser)=>{
        return res.status(200).send(updatedUser)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

// Delete a user

exports.deleteuser=[async (req,res)=>{

    const id = req.params.id;

    await User.deleteOne({_id: id})
    .then(()=>{
        return rs.status(200).send("User deleted successfully")
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

// Verifying user 

exports.authVeryify=[async (req, res)=>{
    return res.json({status: true, message:"authorized"})
}]

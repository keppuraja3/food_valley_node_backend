const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController')
const verifyToken = require('../Middleware/AuthMiddleware')

// Create a user
router.post('/user/register',UserController.addNewUser)

// User login 
router.post('/user/login', UserController.userLogin)

// View users list
router.get('/user/list', UserController.viewList)

// Update a user
router.put('/user/update/:id',UserController.updateUser)

// Delete user
router.delete('/user/delete/:id', UserController.deleteuser)

// // Verify user
// const verifyUser = async (req, res, next)=>{
//     const token = localStorage.getItem('token')
//     if(!token){
//         return res.json({status: false, message: "No token found"})
//     }
//     const decoded = await jwt.verify(token, process.env.SECRET_KEY)
//     next()
// }
router.get('/user/verify',verifyToken ,UserController.authVeryify)


module.exports = router
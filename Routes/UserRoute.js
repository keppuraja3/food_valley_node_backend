const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController')

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

module.exports = router
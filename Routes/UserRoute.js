const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/UserController')

router.post('/user/register',AuthController.addNewUser)
router.post('/user/login', AuthController.userLogin)
router.get('/user/list', AuthController.viewList)

module.exports = router
const express = require('express');
const router = express.Router();

const RegisterController = require('../Controller/RegisterController')

router.post('/user/register',RegisterController.addNewUser)

module.exports = router
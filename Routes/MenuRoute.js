const express = require('express');
const router = express.Router();
const MenuController = require('../Controller/MenuController')

router.post('/menu/create',MenuController.addNewMenu)
router.delete('/menu/delete/:id', MenuController.deleteMenuItem)

module.exports = router

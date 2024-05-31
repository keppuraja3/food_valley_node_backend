const express = require('express');
const router = express.Router();
const MenuController = require('../Controller/MenuController')

// crete item
router.post('/menu/create',MenuController.addNewMenu)

// View all items
router.get('/menu/view', MenuController.viewMenuItems)

// Update item
router.put('/menu/update/:id', MenuController.updateMenuItem)

// Delete item
router.delete('/menu/delete/:id', MenuController.deleteMenuItem)

module.exports = router

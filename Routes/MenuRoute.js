const express = require("express");
const router = express.Router();
const MenuController = require("../Controller/MenuController");
const uploader = require("../helper/helper");

// crete item
router.post(
  "/menu/create",
  uploader.single("menuimage"),
  MenuController.addNewMenu
);

// View all items
router.get("/menu/view", MenuController.viewMenuItems);

// Update item
router.put(
  "/menu/update/:id",
  uploader.single("menuimage"),
  MenuController.updateMenuItem
);

// Delete item
router.delete("/menu/delete/:id", MenuController.deleteMenuItem);

module.exports = router;

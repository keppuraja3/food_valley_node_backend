const express = require("express");
const router = express.Router();
const MenuController = require("../Controller/MenuController");
const uploader = require("../helper/helper");

// crete item
router.post("/menu", uploader.single("menuimage"), MenuController.addNewMenu);

// View all items
router.get("/menu", MenuController.viewMenuItems);

// View one items
router.get("/menu/:id", MenuController.viewMenu);

// Update item
router.put(
  "/menu/:id",
  uploader.single("menuimage"),
  MenuController.updateMenuItem
);

// Delete item
router.delete("/menu/:id", MenuController.deleteMenuItem);

module.exports = router;

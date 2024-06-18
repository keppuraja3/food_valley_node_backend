const Menu = require("../Models/MenuModel");

// Add new menu item
exports.addNewMenu = [
  async (req, res) => {
    let image;

    if (req.file) {
      image = `${req.protocol}://${req.get("host")}/uploads/images/${
        req.file.originalname
      }`;
    }

    const data = JSON.parse(req.body.data);
    // console.log("data-----", data);
    const { name, description, price, rating, deliveryTime, offer, type } =
      data;

    try {
      const newMenu = new Menu({
        name,
        description,
        price,
        rating,
        deliveryTime,
        offer,
        type,
        image,
      });

      const menus = await newMenu.save();

      return res.status(201).json({
        success: true,
        menus,
        message: "Menu added successfully",
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
];

// View menu items
exports.viewMenuItems = [
  async (req, res) => {
    Menu.find()
      .then((items) => {
        return res.status(200).send(items);
      })
      .catch((err) => {
        return res.status(200).send(err.message);
      });
  },
];

// Update menu items
exports.updateMenuItem = [
  async (req, res) => {
    const id = req.params.id;

    const data = JSON.parse(req.body.data);
    console.log("data------", data);
    try {
      const updatedItem = await Menu.findByIdAndUpdate(
        id,
        {
          $set: {
            name: data.name,
            description: data.description,
            price: data.price,
            rating: data.rating,
            deliveryTime: data.deliveryTime,
            offer: data.offer,
            type: data.type,
          },
        },
        { new: true }
      );

      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log(err);
    }
  },
];

// Delete menu item
exports.deleteMenuItem = [
  async (req, res) => {
    const id = req.params.id;
    try {
      await Menu.deleteOne({ _id: id });
      res.status(200).json({ message: "Item deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

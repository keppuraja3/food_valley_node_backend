const mongoose = require("mongoose");

const Menu = mongoose.model(
  "Menu",
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      rating: { type: Number, requied: true },
      deliveryTime: { type: Number, requied: true },
      offer: { type: Number, default: null },
      type: { type: String, required: true },
      image: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Menu;

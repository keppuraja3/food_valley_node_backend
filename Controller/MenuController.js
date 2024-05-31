const { now } = require('mongoose');
const Menu = require('../Models/MenuModel')


// Add new menu item
exports.addNewMenu=[async (req,res)=>{
    const newMenu = new Menu({
        name: req.body.name,
        decription: req.body.decription,
        price: req.body.price,
        rating: req.body.rating,
        deliveryTime: req.body.deliveryTime,
        offer: req.body.offer,
        type: req.body.type
    })

    newMenu.save()
    .then((response)=>{
        return res.status(201).send(response);
    })
    .catch((err)=>{
        console.log(err);
    })
}]


// View menu items

exports.viewMenuItems=[async (req,res)=>{

    Menu.find()
    .then((items)=>{
        return res.status(200).send(items)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })

}]

// Update menu items

exports.updateMenuItem=[(req,res)=>{
    const id = req.params.id;
    Menu.findByIdAndUpdate(id,  {$set: {
        name: req.body.name,
        decription: req.body.decription,
        price: req.body.price,
        rating: req.body.rating,
        deliveryTime: req.body.deliveryTime,
        offer: req.body.offer,
        type: req.body.type
    }},{new: true} )
    .then((item)=>{
        return res.status(200).send(item)
    })
    .catch((err)=>{
        return res.status(200).semd(err.message)
    })



}]

// Delete menu item

exports.deleteMenuItem=[async (req,res)=>{
    const id = req.params.id;
    await Menu.deleteOne({_id: id})
    .then(()=>{
        return res.status(200).send("Item deleted successfully")
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]
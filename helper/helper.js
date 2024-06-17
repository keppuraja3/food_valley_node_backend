// Express storage multer
const express = require('express')
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..','/uploads/images'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });

const uploader = multer({ storage: storage });

// app.post('/upload/single', uploader.single('food_image'), function (req, res) {
//     // req.file is the name of your file in the form above, here 'uploaded_file'
//     // req.body will hold the text fields, if there were any 
//     console.log(req.file, req.body)
//     res.status(200).send("File Uploaded Successfully...!")
// });

module.exports= uploader


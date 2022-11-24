
const mongoose = require("mongoose");
const Users = require("../models/Users").Users;
const Rooms = require("../models/Rooms").Rooms;

require("dotenv").config();

exports.create = async (req, res) => {

  try {

    const creator = await Users.findOne({ _id: req.body.me });

    const newRoom = new Rooms({
      creator : req.body.me,
      room_name : req.body.roomName
    });

     await newRoom.save();

      return res.status(200).json({
        success:true
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};




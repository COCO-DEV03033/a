
const path = require('path');

const mongoose = require("mongoose");
const Users = require("../models/Users").Users;
const Rooms = require("../models/Rooms").Rooms;
// const moment = require("moment");

require("dotenv").config();

exports.newUserList = async (req, res) => {

  try {
    const users = await Users.find({ allow: false });
    const me = await Users.findOne({ _id: req.body.me });
    const AllUsers = await Users.find();
    const AllRooms = await Rooms.find();

      return res.status(200).json({
        newUsers : users,
        me : me,
        AllUsers : AllUsers.length,
        AllRooms : AllRooms.length
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.allowOne = async (req, res) => {

  try {

    await Users.findOneAndUpdate(
      { email: req.body.email },
      {
        allow:true
      },
      {
        new: true
      }
    );

      return res.status(200).json({
        success:true
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};




// const multer = require('multer');

 const Auth = require('../controllers/authController');
 const Admin_board = require('../controllers/admin_boardController');
 const Room = require('../controllers/roomController');

const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const Users = require("../models/Users").Users;

const admin = {
    email: 'admin@demo.com',
    username: 'admin',
    password: 'admin',
    role: 'admin',
    address: 'Canada',
    allow:true
};


////////////////////////////   initialing first by admin ///////////
const init = async (initialAdmin) => {

    let { email, password, username, role, address, allow} = initialAdmin;

    const existingAdmin = await Users.findOne({ role: role });
    if (existingAdmin)
      return ;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAdmin = new Users({
      email,
      password: passwordHash,
      username,
       role,
      address,
      allow
    });
    const savedAdmin = await newAdmin.save();

    return ;
};

 init(admin);
/////////////////////////////

  // router.route("account/login").post(dashboards.login);

  router.post("/account/signup", Auth.register);
  router.post("/account/login", Auth.login);

  router.post("/admin/newuserlist", Admin_board.newUserList);
  router.post("/admin/allowOne", Admin_board.allowOne);

  router.post("/user/create_room", Room.create);

exports.router = router;

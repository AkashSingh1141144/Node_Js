const User = require("../models/userModel.js");

exports.home = (req, res) => {
  res.send("Hi My Love Sandhya !");
};

//TODO:
// createUser into DB
exports.createUser = async (req, res) => {
  // extract info
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Name and Email is important");
    }
    const userExistes = User.findOne({ email });
    if (userExistes) {
      console.log("User already Exists");
    }
    const user = await User.create({
      name, // name: name,
      email, // email: email
    });
    res.status(201).json({
      success: true,
      message: "User Created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//TODO:
//Get All users from DB
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No users found",
        users,
      });
    }
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// TODO:
// Update User from DB
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User Update Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// TODO:
// Delete User from DB

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; // hum data ko body ya url se data lete hai yha hum url se data le rehe hai or body ke 'req.body' se hota hai
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

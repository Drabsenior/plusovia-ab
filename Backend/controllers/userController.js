const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
  }

  // Check if user exists
  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400);
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      //   token: generateToken(user._id),
    });
  } else {
    res.status(400);
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Check for user email
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      //   token: generateToken(user._id),
    });
    res.send("you logged in successfully");
  } else {
    res.status(400);
    res.send("Incorrect credentials");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
// const getMe = asyncHandler(async (req, res) => {
//   res.status(200).json(req.user);
// });

// Generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })
// }

module.exports = {
  registerUser,
  loginUser,
  //   getMe,
};

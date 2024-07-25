const user = require('../models/UserModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await user.find().sort('createdAt');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

module.exports = getAllUsers;

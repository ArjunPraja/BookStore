const jwt = require('jsonwebtoken');
const Order = require('../models/OrderModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const getOrderById = async (req, res) => {
  

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const token = authHeader.split(' ')[1];
    console.log(token)

    // const token = req.cookies.token;

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;

    const order = await Order.find({ userUuid:userUuid});
    if (!order) return res.status(404).json({ message: 'Order not found', error: true });

    res.status(200).json({ order});
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while retrieving the order', error });
  }
};

module.exports = getOrderById;

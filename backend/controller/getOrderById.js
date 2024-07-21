const jwt = require('jsonwebtoken');
const Order = require('../models/OrderModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const getOrderById = async (req, res) => {
  const { bookUuid } = req.params;

  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;

    const order = await Order.findOne({ userUuid, 'orderItems.bookUuid': bookUuid });
    if (!order) return res.status(404).json({ message: 'Order not found', error: true });

    res.status(200).json({ order, userUuid });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while retrieving the order', error });
  }
};

module.exports = getOrderById;

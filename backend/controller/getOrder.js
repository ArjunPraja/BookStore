const Order = require('../models/OrderModel');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort('createdAt');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

module.exports = getAllOrders;

const jwt = require('jsonwebtoken');
const Order = require('../models/OrderModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const deleteOrderItemByBookUuid = async (req, res) => {
  const { bookUuid } = req.params;

  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;

    const order = await Order.findOneAndUpdate(
      { userUuid, 'orderItems.bookUuid': bookUuid },
      { $pull: { orderItems: { bookUuid } } },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: 'Order item not found', error: true });
    }

    const updatedTotalPrice = order.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    order.totalPrice = updatedTotalPrice;

    await order.save();

    res.status(200).json({ message: 'Order item deleted successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the order item', error });
  }
};

module.exports = deleteOrderItemByBookUuid;

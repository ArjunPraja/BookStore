const jwt = require('jsonwebtoken');
const Order = require('../models/OrderModel');
const Joi = require('joi');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const addOrder = async (req, res) => {
  const schema = Joi.object({
    orderItems: Joi.array().items(
      Joi.object({
        bookUuid: Joi.string().uuid().required(),
        quantity: Joi.number().min(1).required(),
        price: Joi.number().min(0).required()
      })
    ).required(),
    totalPrice: Joi.number().min(0).required(),
    shippingAddress: Joi.string().required(),
    orderStatus: Joi.string().valid('pending', 'shipped', 'delivered', 'cancelled').default('pending'),
    paymentStatus: Joi.string().valid('paid', 'unpaid').default('unpaid')
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Validation errors",
      errors: error.details,
      error: true
    });
  }

  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;

    const { orderItems, totalPrice, shippingAddress, orderStatus, paymentStatus } = req.body;

    const order = new Order({
      userUuid,
      orderItems,
      totalPrice,
      shippingAddress,
      orderStatus,
      paymentStatus
    });

    await order.save();
    res.status(200).json({ message: 'Order added successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

module.exports = addOrder;

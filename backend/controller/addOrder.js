const jwt = require('jsonwebtoken');
const Order = require('../models/OrderModel');
const Joi = require('joi');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const addOrder = async (req, res) => {
   
  try {
    // // Get the token from the Authorization header
    // const authHeader = req.headers.authorization;
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //   return res.status(401).json({ message: 'No token provided', error: true });
    // }

    // const token = authHeader.split(' ')[1];
    // console.log(token)
    const token=req.cookies.token;
    
    // Verify the token and extract user UUID
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;
    console.log(userUuid)
    // Destructure the validated request body
    const { orderItems, totalPrice, shippingAddress, orderStatus, paymentStatus } = req.body;

    // Create a new order document
    const order = new Order({
      userUuid,
      orderItems,
      totalPrice,
      shippingAddress,
      orderStatus,
      paymentStatus
    });

    // Save the order to the database
    await order.save();
    res.status(201).json({ message: 'Order added successfully', order });
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token', error: true });
    }
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

module.exports = addOrder;

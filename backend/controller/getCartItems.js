// const jwt = require('jsonwebtoken');
// const ShoppingCart = require('../models/ShopingCartModel');
// require('dotenv').config();

// const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

// const getCartItems = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({ message: 'No token provided', error: true });
//     }

//     const decoded = jwt.verify(token, JWT_SECRET_KEY);
//     const userUuid = decoded.id;

//     const cart = await ShoppingCart.findOne({ userUuid });
//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found', error: true });
//     }

//     return res.status(200).json({
//       message: 'Cart items retrieved successfully',
//       data: cart.cartItems,
//       success: true
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: 'An error occurred',
//       error: error.message || error,
//       error: true
//     });
//   }
// };

// module.exports = getCartItems;






// const jwt = require('jsonwebtoken');
// const ShoppingCart = require('../models/ShopingCartModel');
// require('dotenv').config();

// const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

// const getCartItems = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({ message: 'No token provided', error: true });
//     }

//     const decoded = jwt.verify(token, JWT_SECRET_KEY);
//     const userUuid = decoded.id;

//     const cart = await ShoppingCart.findOne({ userUuid });
//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found', error: true });
//     }
//      return res.status(200).json({
//       message: 'Cart items retrieved successfully',
//       data: cart.cartItems,
//       success: true
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: 'An error occurred',
//       error: error.message || error,
//       error: true
//     });
//   }
// };

// module.exports = getCartItems;







const jwt = require('jsonwebtoken');
const ShoppingCart = require('../models/ShopingCartModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY; // Corrected the environment variable name

const getCartItems = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;

    console.log(token)
    const cart = await ShoppingCart.findOne({ userUuid });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found', error: true });
    }

    return res.status(200).json({
      message: 'Cart items retrieved successfully',
      data: cart.cartItems,
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred',
      error: error.message || error,
      error: true
    });
  }
};

module.exports = getCartItems;
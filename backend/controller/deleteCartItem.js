// const jwt = require('jsonwebtoken');
// const ShoppingCart = require('../models/ShopingCartModel');
// require('dotenv').config();

// const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

// const deleteCartItem = async (req, res) => {
//   const { bookUuid } = req.params;

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

//     const itemIndex = cart.cartItems.findIndex(item => item.bookUuid === bookUuid);
//     if (itemIndex === -1) {
//       return res.status(404).json({ message: 'Item not found in cart', error: true });
//     }

//     cart.cartItems.splice(itemIndex, 1);
//     await cart.save();

//     return res.status(200).json({
//       message: 'Item removed from cart successfully',
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

// module.exports = deleteCartItem;




                                        
const jwt = require('jsonwebtoken');
const ShoppingCart = require('../models/ShopingCartModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const deleteCartItem = async (req, res) => {
  const { bookUuid } = req.params;

  try {

    
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;

    const cart = await ShoppingCart.findOne({ userUuid });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found', error: true });
    }

    const itemIndex = cart.cartItems.findIndex(item => item.bookUuid === bookUuid);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart', error: true });
    }

    cart.cartItems.splice(itemIndex, 1);
    await cart.save();

    return res.status(200).json({
      message: 'Item removed from cart successfully',
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

module.exports = deleteCartItem;
// const express = require('express');
// const router = express.Router();
// // const ShoppingCart = require('../models/ShoppingCartModel'); 
// const ShoppingCart = require('../models/ShopingCartModel');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// // Route to get cart items
// router.get('/cart', async (req, res) => {
//   try {
//     const token = req.cookies.token;

//     // Check if token is provided
//     if (!token) {
//       return res.status(401).json({ message: 'No token provided', error: true });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, JWT_SECRET_KEY);
//     const userUuid = decoded.id; // Assuming 'id' is used as userUuid in the token

//     // Fetch cart for the user
//     const cart = await ShoppingCart.findOne({ userUuid }).populate('cartItems.bookUuid');

//     // Handle case where cart is empty or not found
//     if (!cart || cart.cartItems.length === 0) {
//       return res.status(200).json({ cartItems: [] });
//     }

//     // Format cart items to send in response
//     const cartItems = cart.cartItems.map(item => ({
//       bookUuid: item.bookUuid.uuid,
//       book: item.bookUuid,
//       price: item.price,
//       quantity: item.quantity
//     }));

//     // Send response with cart items
//     res.status(200).json({ cartItems });
//   } catch (error) {
//     console.error('Error fetching cart items:', error); // Log error for debugging
//     res.status(500).json({ message: 'An error occurred while fetching cart items', error: true });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
// const ShoppingCart = require('../models/ShoppingCartModel');
const ShoppingCart = require('../models/ShopingCartModel');
const jwt = require('jsonwebtoken');
const deleteCartItem = require('../controller/deleteCartItem');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Route to get cart items
router.get('/cartItems', async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id; // Assuming 'id' is used as userUuid in the token

    const cart = await ShoppingCart.findOne({ userUuid });

    if (!cart || cart.cartItems.length === 0) {
      return res.status(200).json({ cartItems: [] });
    }

    res.status(200).json({ cartItems: cart.cartItems });
  } catch (error) {
    console.error('Error fetching cart items:', error); // Log error for debugging
    res.status(500).json({ message: 'An error occurred while fetching cart items', error: true });
  }
});

router.delete('/cartItems/:uuid',deleteCartItem)


module.exports = router;

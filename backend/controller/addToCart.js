const jwt = require('jsonwebtoken');
const ShoppingCart = require('../models/ShopingCartModel');
const BookModel = require('../models/BookModel');
const Joi = require('joi');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const addToCart = async (req, res) => {
  const schema = Joi.object({
    bookUuid: Joi.string().guid({ version: ['uuidv4'] }).required(),
    quantity: Joi.number().min(1).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Validation errors", errors: error.details, error: true });
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided', error: true });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const userUuid = decoded.id;
    console.log(userUuid)
    const { bookUuid, quantity } = req.body;
    const book = await BookModel.findOne({ uuid: bookUuid });
    
    console.log(book)
    if (!book) {
      return res.status(404).json({ message: 'Book not found', error: true });
    }

    let cart = await ShoppingCart.findOne({ userUuid });
    if (!cart) {
      cart = new ShoppingCart({ userUuid, cartItems: [] });
    }

    const existingCartItem = cart.cartItems.find(item => item.bookUuid === bookUuid);
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      cart.cartItems.push({ bookUuid,title:book.title,coverImage:book.coverImage, quantity, price: book.price });
    }

    await cart.save();
    res.status(200).json({ message: 'Book added to cart', cart });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

module.exports = addToCart;
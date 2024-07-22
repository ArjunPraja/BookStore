const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const cartItemSchema = new mongoose.Schema({
  bookUuid: {
    type: String,
    required: true
  },
  title: { type: String, required: true },
  coverImage: { type: String, required: true },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const shoppingCartSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true
  },
  userUuid: {
    type: String,
    required: true
  },
  cartItems: [cartItemSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
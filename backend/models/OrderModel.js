const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Order item schema
const orderItemSchema = new mongoose.Schema({
  bookUuid: {
    type: String,
    required: true,
    default: uuidv4
  },
  title: { type: String, required: true },
  coverImage: { type: String, required: true },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Order schema
const orderSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true,
},
  userUuid: {
    type: String,
    required: true,
    default: uuidv4
  },
  orderItems: [orderItemSchema],
  totalPrice: {
    type: Number,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'unpaid'],
    default: 'unpaid'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to automatically update `updatedAt` field
orderSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Middleware to ensure `totalPrice` is correctly calculated
orderSchema.pre('save', function (next) {
  this.totalPrice = this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

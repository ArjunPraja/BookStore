const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    contactNo: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        default: false
    }
    ,
    isActive: {
        type: Boolean,
        default: true
    },
    
    
    createdAt: {
        type: Date,
        default: Date.now
    },

    
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');

const reviewSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

const validateReview = (review) => {
    const schema = Joi.object({
        bookId: Joi.string().uuid().required(),
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required()
    });

    return schema.validate(review);
};

module.exports = {
    Review,
    validateReview
};

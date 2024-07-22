const jwt = require('jsonwebtoken');
const { Review, validateReview } = require('../models/ReviewsModel');
const UserModel = require('../models/UserModel');
const BookModel = require('../models/BookModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const addReview = async (req, res) => {
    // Get the JWT token from cookies
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No token provided', error: true });
    }

    // Decode the token to get userUuid
    let userUuid;
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        userUuid = decoded.id; // Assuming 'id' is used as userUuid in the token
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', error: true });
    }

    // Validate request body
    const { error } = validateReview(req.body);
    if (error) {
        return res.status(400).json({
            message: "Validation errors",
            errors: error.details,
            error: true
        });
    }

    try {
        const { bookId, rating, comment } = req.body;

        // Find the user by userUuid
        const user = await UserModel.findOne({ uuid: userUuid });
        if (!user) {
            return res.status(404).json({ message: 'User not found', error: true });
        }

        // Find the book by bookId
        const book = await BookModel.findOne({ uuid: bookId });
        if (!book) {
            return res.status(404).json({ message: 'Book not found', error: true });
        }

        // Create and save the new review
        const review = new Review({ userId: userUuid, bookId, rating, comment });
        await review.save();

        res.status(200).json({ message: 'Review added successfully', review });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

module.exports = addReview;

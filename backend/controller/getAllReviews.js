const jwt = require('jsonwebtoken');
const { Review } = require('../models/ReviewsModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const getAllReviews = async (req, res) => {
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

    try {
        const reviews = await Review.find({ userId: userUuid }).sort('createdAt');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

module.exports = getAllReviews;

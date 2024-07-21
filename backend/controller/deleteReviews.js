const { Review } = require('../models/ReviewsModel');

const deleteReview = async (req, res) => {
    try {
        const result = await Review.deleteOne({ uuid: req.params.id });
        if (result.deletedCount === 0) return res.status(404).json({ message: 'Review not found', error: true });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

module.exports = deleteReview;

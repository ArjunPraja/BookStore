const FavoriteBook = require('../models/FavoriteModel');
const getUserDetailsFromToken = require('../helper/getUserDetailsFromToken');

const removeFavoriteBook = async (req, res) => {
    const token = req.cookies.token;
    const userDetails = await getUserDetailsFromToken(token);

    if (userDetails.error || userDetails.logout) {
        return res.status(401).json(userDetails);
    }

    const { bookUuid } = req.params;

    if (!bookUuid) {
        return res.status(400).json({ message: 'Book UUID is required', error: true });
    }

    try {
        // Find the user's favorite books
        const favoriteBooks = await FavoriteBook.findOne({ userId: userDetails._id });

        if (!favoriteBooks) {
            return res.status(404).json({ message: 'No favorite books found', error: true });
        }

        // Check if the book UUID exists in the favorites
        if (!favoriteBooks.bookUuids.includes(bookUuid)) {
            return res.status(404).json({ message: 'Book UUID not found in favorites', error: true });
        }

        // Remove the book UUID from the list
        favoriteBooks.bookUuids = favoriteBooks.bookUuids.filter(uuid => uuid !== bookUuid);
        await favoriteBooks.save();

        // Respond with the updated favorite books list
        res.status(200).json({ message: 'Book UUID removed from favorite list successfully', data: favoriteBooks });
    } catch (error) {
        console.error('Error removing favorite book:', error); // Log error for debugging
        res.status(500).json({ message: 'Server Error', error: true });
    }
};

module.exports = removeFavoriteBook;

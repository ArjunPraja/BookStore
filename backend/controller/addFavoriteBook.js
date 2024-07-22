const FavoriteBook = require('../models/FavoriteModel');
const getUserDetailsFromToken = require('../helper/getUserDetailsFromToken');

const addFavoriteBook = async (req, res) => {
    const token = req.cookies.token;
    const userDetails = await getUserDetailsFromToken(token);

    if (userDetails.error || userDetails.logout) {
        return res.status(401).json(userDetails);
    }

    const { bookUuid } = req.body;

    // Validate the bookUuid
    if (!bookUuid) {
        return res.status(400).json({ message: 'Book UUID is required', error: true });
    }

    try {
        let favoriteBooks = await FavoriteBook.findOne({ userId: userDetails._id });

        if (!favoriteBooks) {
            favoriteBooks = new FavoriteBook({
                userId: userDetails._id,
                bookUuids: [bookUuid]
            });
        } else {
            // Add bookUuid only if it's not already in the array
            if (!favoriteBooks.bookUuids.includes(bookUuid)) {
                favoriteBooks.bookUuids.push(bookUuid);
            }
        }

        await favoriteBooks.save();
        res.status(201).json({ message: 'Book UUID added to favorite list successfully', data: favoriteBooks });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Server Error', error: true });
    }
};

module.exports = addFavoriteBook;

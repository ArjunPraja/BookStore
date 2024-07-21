const FavoriteBook = require('../models/FavoriteModel');
const getUserDetailsFromToken = require('../helper/getUserDetailsFromToken');
const Book = require('../models/BookModel'); // Assuming there is a Book model to fetch book details

const getFavoriteBooks = async (req, res) => {
    const token = req.cookies.token;
    
    // Check for user details from the token
    const userDetails = await getUserDetailsFromToken(token);
    if (userDetails.error || userDetails.logout) {
        return res.status(401).json(userDetails);
    }

    try {
        // Fetch favorite books for the user
        const favoriteBooks = await FavoriteBook.findOne({ userId: userDetails._id });
        if (!favoriteBooks) {
            return res.status(404).json({ message: 'No favorite books found', error: true });
        }

        // Fetch details for each favorite book
        const booksWithDetails = await Promise.all(favoriteBooks.bookUuids.map(async (bookUuid) => {
            const bookDetails = await Book.findOne({ uuid: bookUuid });
            if (!bookDetails) {
                return { uuid: bookUuid, message: 'Book not found' }; // Return a message if book not found
            }
            return bookDetails;
        }));

        // Return the details of the favorite books
        res.status(200).json({ message: 'Favorite books fetched successfully', data: booksWithDetails });
    } catch (error) {
        console.error('Error fetching favorite books:', error); // Log error for debugging
        res.status(500).json({ message: 'Server Error', error: true });
    }
};

module.exports = getFavoriteBooks;

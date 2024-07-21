const mongoose = require('mongoose');

const favoriteBookSchema = new mongoose.Schema({
    userId: {
        type: String, // Changed to String if using UUIDs
        ref: 'User',
        required: true
    },
    bookUuids: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('FavoriteBook', favoriteBookSchema);

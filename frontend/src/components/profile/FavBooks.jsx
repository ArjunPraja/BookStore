import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteBooks = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/favoriteBooks`, {
          credentials: 'include' // Include cookies in the request
        });

        if (!response.ok) {
          throw new Error('Failed to fetch favorite books');
        }

        const result = await response.json();
        setFavoriteBooks(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Favorite Books</h1>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books found.</p>
      ) : (
        <ul className="space-y-4">
          {favoriteBooks.map((bookUuid) => (
            <li key={bookUuid} className="p-4 border rounded-lg shadow-sm">
              <p><strong>Book UUID:</strong> {bookUuid}</p>
              {/* Assuming you have a book details page */}
              <Link to={`/books/${bookUuid}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteBooks;

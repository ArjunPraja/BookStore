import React, { useEffect, useState } from "react";
import Header1 from "../Header/Header1";
import Swal from "sweetalert2";
import Footer1 from "../Footer/Footer1";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Book1() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch books data from the API
    fetch("http://localhost:8080/api/admin/getbook")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleExpand = (book) => {
    Swal.fire({
      title: book.title,
      html: `
        <div class="relative flex flex-col sm:flex-row items-center sm:items-start">
          <img src="${book.coverImage}" alt="${book.title}" class="w-24 sm:w-1/4 h-auto mb-4 sm:mb-0 sm:mr-4"/>
          <div class="flex flex-col text-left w-full sm:w-2/3">
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Price:</strong> ₹${book.price}</p>
            <p class="mt-4 text-justify w-auto">
              <strong>Description:</strong> ${book.description}
            </p>
          </div>
          <div class="absolute top-4 right-4 flex space-x-4">
            <img src="path-to-your-heart-image.svg" alt="Favorite" class="w-8 h-8" />
            <img src="path-to-your-cart-image.svg" alt="Cart" class="w-8 h-8" />
          </div>
        </div>
      `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Close',
      width: '80%', // Set the width to 80% of the page
      customClass: {
        popup: 'w-full', // Ensure full width
        confirmButton: 'bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold'
      },
      backdrop: true,
      position: 'center'
    });
  };

  const handleBuyNow = (book) => {
    navigate(`/books/bookinfo/${book.uuid}`, { state: { book } });
  };

  return (
    <>
      <Header1 />
      <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Books</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search books by title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid gap-8">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => {
              const shortDescription = book.description.slice(0, 150);

              return (
                <Card key={book.uuid} className="bg-white shadow-md rounded-md overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="flex items-center">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="h-44 w-28"
                    />
                    <div className="p-4 flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">
                        {book.title}
                      </h5>
                      <p className="text-sm text-gray-700 mb-4">
                        {book.genre}
                      </p>
                      <p className="text-sm text-gray-700 mb-4">
                        {shortDescription}...
                        <button
                          onClick={() => handleToggleExpand(book)}
                          className="text-blue-500 underline ml-1"
                        >
                          Read More
                        </button>
                      </p>
                      <p className="text-lg text-gray-900 font-semibold mb-4">
                        ₹{book.price}
                      </p>
                      <button
                        onClick={() => handleBuyNow(book)}
                        className="bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold self-start"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })
          ) : (
            <div className="w-full text-center">
              <p className="text-xl text-gray-500">No books found.</p>
            </div>
          )}
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default Book1;








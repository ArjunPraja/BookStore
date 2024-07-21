import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdRemoveShoppingCart } from 'react-icons/md';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Token:", token);

        if (!token) {
          throw new Error('No token found');
        }


        const response = await fetch('http://localhost:8080/api/users/getcartitems', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        const data = await response.json();
        console.log('Fetch response:', data);

        if (data.error) {
          toast.error(data.message);
        } else {
          setCartItems(data.data);
        }
      } catch (error) {
        toast.error('An error occurred while fetching the cart items.');
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (bookUuid) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found in localStorage.');
        return;
      }

       

      const response = await fetch(`http://localhost:8080/api/users/cartItems/${bookUuid}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ bookUuid }),
      });

      const data = await response.json();
      console.log('Remove response:', data);

      if (data.error) {
        toast.error(data.message);
      } else {
        setCartItems(data.data);
        toast.success('Book removed from cart successfully!');
      }
    } catch (error) {
      toast.error('An error occurred while removing the book from the cart.');
    }
  };

  

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div key={item.bookUuid} className="border rounded-lg p-4">
            <img
              src={item.coverImage}
              alt={item.title}
              className="w-full h-48 object-cover mb-4"
            />
            {/* <h2 className="text-2xl font-bold mb-2">{item.book.title}</h2> */}
            {/* <p className="text-lg text-gray-600 mb-2">{item.book.genre}</p> */}
            <p className="text-lg font-semibold mb-2">₹{item.price}</p>
            <p className="text-lg font-semibold mb-2">total Price :- ₹{item.price*item.quantity}</p>
            <p className="text-lg mb-4">Quantity: {item.quantity}</p>
            <button
              className="w-full px-4 py-2 bg-red-500 rounded-3xl text-white font-medium flex items-center justify-center"
              onClick={() => removeFromCart(item.bookUuid)}
            >
              <MdRemoveShoppingCart className="h-6 mr-2" />
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

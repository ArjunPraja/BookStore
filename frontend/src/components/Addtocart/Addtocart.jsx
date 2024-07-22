// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { MdRemoveShoppingCart } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';
// import Header1 from '../Header/Header1';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
// import emptyCartImage from '../../assets/shoppingcart.png'; // Adjust the path as necessary

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch('http://localhost:8080/api/users/getcartitems', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',
//         });

//         const data = await response.json();

//         if (data.error) {
//           toast.error(data.message);
//         } else {
//           setCartItems(data.data);
//         }
//       } catch (error) {
//         toast.error('An error occurred while fetching the cart items.');
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const removeFromCart = async (bookUuid) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found in localStorage.');
//         return;
//       }

//       const response = await fetch(`http://localhost:8080/api/users/cartItems/${bookUuid}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({ bookUuid }),
//       });

//       const data = await response.json();

//       if (data.error) {
//         toast.error(data.message);
//       } else {
//         setCartItems(data.data);
//         toast.success('Book removed from cart...');
//       }
//     } catch (error) {
//       toast.error('An error occurred while removing the book from the cart.');
//     }
//   };

//   return (
//     <>
//       <Header1 />
//       <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>
//         {cartItems.length > 0 ? (
//           <div className="grid gap-8">
//             {cartItems.map((item) => (
//               <div key={item.bookUuid} className="bg-white shadow-md rounded-md overflow-hidden transform transition duration-500 hover:scale-105">
//                 <div className="flex items-center">
//                   <img
//                     src={item.coverImage}
//                     alt={item.title}
//                     className="h-44 w-28"
//                   />
//                   <div className="p-4 flex-1">
//                     <h5 className="text-2xl font-bold text-gray-900 mb-2">
//                       {item.title}
//                     </h5>
//                     <p className="text-sm text-gray-700 mb-4">
//                       by {item.author}
//                     </p>
//                     <p className="text-green-600 mb-4">In Stock</p>
//                     <div className="flex items-center mb-4">
//                       <label htmlFor={`quantity-${item.bookUuid}`} className="mr-2">Qty:</label>
//                       <select
//                         id={`quantity-${item.bookUuid}`}
//                         value={item.quantity}
//                         onChange={(e) => updateQuantity(item.bookUuid, e.target.value)}
//                         className="border rounded-md px-2 py-1"
//                       >
//                         {[1, 2, 3, 4, 5].map(qty => (
//                           <option key={qty} value={qty}>{qty}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <p className="text-lg text-gray-900 font-semibold mb-4">
//                       ₹{item.price}
//                     </p>
//                     <button
//                       className="bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold self-start"
//                       onClick={() => removeFromCart(item.bookUuid)}
//                     >
//                       <MdRemoveShoppingCart className="h-6 mr-2" />
//                       Remove from Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <img src={emptyCartImage} alt="Empty Cart" className="w-72 h-60 mx-auto mb-4" />
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty.</h2>
//             <p className="text-lg text-gray-500 mb-8">Looks like you haven’t added anything to your cart yet</p>
//             {/* <p className="text-lg text-gray-500 mb-8">anything to your cart yet</p> */}
//             <button
//               className="bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold"
//               onClick={() => navigate('/books')}
//             >
//               Shop Now
//             </button>
//           </div>
//         )}
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         toastStyle={{ marginTop: '0px' }}
//       />
//     </>
//   );
// };

// export default Cart;




// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { MdRemoveShoppingCart } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';
// import Header1 from '../Header/Header1';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
// import emptyCartImage from '../../assets/shoppingcart.png'; // Adjust the path as necessary

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch('http://localhost:8080/api/users/getcartitems', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',
//         });

//         const data = await response.json();

//         if (data.error) {
//           toast.error(data.message);
//         } else {
//           setCartItems(data.data);
//         }
//       } catch (error) {
//         toast.error('An error occurred while fetching the cart items.');
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const removeFromCart = async (bookUuid) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found in localStorage.');
//         return;
//       }

//       const response = await fetch(`http://localhost:8080/api/users/cartItems/${bookUuid}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({ bookUuid }),
//       });

//       const data = await response.json();

//       if (data.error) {
//         toast.error(data.message);
//       } else {
//         setCartItems(data.data);
//         toast.success('Book removed from cart...');
//       }
//     } catch (error) {
//       toast.error('An error occurred while removing the book from the cart.');
//     }
//   };

//   return (
//     <>
//       <Header1 />
//       <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>
//         {cartItems.length > 0 ? (
//           <div className="grid gap-8">
//             {cartItems.map((item) => (
//               <div key={item.bookUuid} className="bg-white shadow-md rounded-md overflow-hidden transform transition duration-500 hover:scale-105">
//                 <div className="flex items-center">
//                   <img
//                     src={item.coverImage}
//                     alt={item.title}
//                     className="h-48 w-32"
//                   />
//                   <div className="p-4 flex-1">
//                     <h5 className="text-2xl font-bold text-gray-900 mb-2">
//                       {item.title}
//                     </h5>
//                     <p className="text-sm text-gray-700 mb-4">
//                       by {item.author}
//                     </p>
//                     <p className="text-green-600 mb-4">In Stock</p>
//                     <div className="flex items-center mb-4">
//                       <label htmlFor={`quantity-${item.bookUuid}`} className="mr-2">Qty:</label>
//                       <select
//                         id={`quantity-${item.bookUuid}`}
//                         value={item.quantity}
//                         onChange={(e) => updateQuantity(item.bookUuid, e.target.value)}
//                         className="border rounded-md px-2 py-1"
//                       >
//                         {[1, 2, 3, 4, 5].map(qty => (
//                           <option key={qty} value={qty}>{qty}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="flex items-center justify-between mb-4">
//                       <p className="text-lg text-gray-900 font-semibold">
//                         ₹{item.price}
//                       </p>
//                       <button
//                         className="bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold flex items-center"
//                         onClick={() => removeFromCart(item.bookUuid)}
//                       >
//                         <MdRemoveShoppingCart className="h-6 w-6 mr-2" />
//                         Remove from Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <img src={emptyCartImage} alt="Empty Cart" className="w-72 h-60 mx-auto mb-4" />
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty.</h2>
//             <p className="text-lg text-gray-500 mb-8">Looks like you haven’t added anything to your cart yet</p>
//             <button
//               className="bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold"
//               onClick={() => navigate('/books')}
//             >
//               Shop Now
//             </button>
//           </div>
//         )}
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         toastStyle={{ marginTop: '0px' }}
//       />
//     </>
//   );
// };

// export default Cart;








// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { MdRemoveShoppingCart } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';
// import Header1 from '../Header/Header1';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
// import emptyCartImage from '../../assets/shoppingcart.png'; // Adjust the path as necessary
// import CartTotal from '../cart/cartTotal';




// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch('http://localhost:8080/api/users/getcartitems', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',
//         });

//         const data = await response.json();

//         if (data.error) {
//           toast.error(data.message);
//         } else {
//           setCartItems(data.data);
//         }
//       } catch (error) {
//         toast.error('An error occurred while fetching the cart items.');
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const removeFromCart = async (bookUuid) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found in localStorage.');
//         return;
//       }

//       const response = await fetch(`http://localhost:8080/api/users/cartItems/${bookUuid}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({ bookUuid }),
//       });

//       const data = await response.json();

//       if (data.error) {
//         toast.error(data.message);
//       } else {
//         setCartItems(data.data);
//         toast.success('Book removed from cart...');
//       }
//     } catch (error) {
//       toast.error('An error occurred while removing the book from the cart.');
//     }
//   };

//   const updateQuantity = async (bookUuid, quantity) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found in localStorage.');
//         return;
//       }

//       const response = await fetch(`http://localhost:8080/api/users/cartItems/${bookUuid}`, {
//         method: 'PATCH',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({ bookUuid, quantity }),
//       });

//       const data = await response.json();

//       if (data.error) {
//         toast.error(data.message);
//       } else {
//         setCartItems(data.data);
//         toast.success('Quantity updated successfully.');
//       }
//     } catch (error) {
//       toast.error('An error occurred while updating the quantity.');
//     }
//   };

//   return (
//     <>
//       <Header1 />
//       <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>
//         {cartItems.length > 0 ? (
//           <>
//             <div className="grid gap-8">
//               {cartItems.map((item) => (
//                 <div key={item.bookUuid} className="bg-white shadow-md rounded-md overflow-hidden transform transition duration-500 hover:scale-105">
//                   <div className="flex items-center">
//                     <img
//                       src={item.coverImage}
//                       alt={item.title}
//                       className="h-48 w-32"
//                     />
//                     <div className="p-4 flex-1">
//                       <h5 className="text-2xl font-bold text-gray-900 mb-2">
//                         {item.title}
//                       </h5>
//                       <p className="text-sm text-gray-700 mb-4">
//                         by {item.author}
//                       </p>
//                       <p className="text-green-600 mb-4">In Stock</p>
//                       <div className="flex items-center mb-4">
//                         <label htmlFor={`quantity-${item.bookUuid}`} className="mr-2">Qty:</label>
//                         <select
//                           id={`quantity-${item.bookUuid}`}
//                           value={item.quantity}
//                           onChange={(e) => updateQuantity(item.bookUuid, e.target.value)}
//                           className="border rounded-md px-2 py-1"
//                         >
//                           {[1, 2, 3, 4, 5].map(qty => (
//                             <option key={qty} value={qty}>{qty}</option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="flex items-center justify-between mb-4">
//                         <p className="text-lg text-gray-900 font-semibold">
//                           ₹{item.price}
//                         </p>
//                         <button
//                           className="bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold flex items-center"
//                           onClick={() => removeFromCart(item.bookUuid)}
//                         >
//                           <MdRemoveShoppingCart className="h-6 w-6 mr-2" />
//                           Remove from Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* <CartTotal cartItems={cartItems} /> Add the CartTotal component here */}
//             <CartTotal cartItems={cartItems} onPlaceOrder={placeOrder}/>
//           </>
//         ) : (
//           <div className="text-center py-20">
//             <img src={emptyCartImage} alt="Empty Cart" className="w-72 h-60 mx-auto mb-4" />
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty.</h2>
//             <p className="text-lg text-gray-500 mb-8">Looks like you haven’t added anything to your cart yet</p>
//             <button
//               className="bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold"
//               onClick={() => navigate('/books')}
//             >
//               Shop Now
//             </button>
//           </div>
//         )}
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         toastStyle={{ marginTop: '0px' }}
//       />
//     </>
//   );
// };

// export default Cart;






import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Header1 from '../Header/Header1';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import emptyCartImage from '../../assets/shoppingcart.png'; // Adjust the path as necessary
import CartTotal from '../cart/cartTotal'; // Import the CartTotal component
import Footer1 from '../Footer/Footer1';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
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

      if (data.error) {
        toast.error(data.message);
      } else {
        setCartItems(data.data);
        toast.success('Book removed from cart...');
      }
    } catch (error) {
      toast.error('An error occurred while removing the book from the cart.');
    }
  };

  const updateQuantity = async (bookUuid, quantity) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found in localStorage.');
        return;
      }

      const response = await fetch(`http://localhost:8080/api/users/cartItems/${bookUuid}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ bookUuid, quantity }),
      });

      const data = await response.json();

      if (data.error) {
        toast.error(data.message);
      } else {
        setCartItems(data.data);
        toast.success('Quantity updated successfully.');
      }
    } catch (error) {
      toast.error('An error occurred while updating the quantity.');
    }
  };

  const placeOrder = () => {
    // Implement place order logic here
    toast.success('Order placed successfully!');
  };

  return (
    <>
      <Header1 />
      <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>
        {console.log(cartItems)}
        {cartItems.length > 0 ? (
          <>
            <div className="grid gap-8">
              {cartItems.map((item) => (
                <div key={item.bookUuid} className="bg-white shadow-md rounded-md overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="flex items-center">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="h-48 w-32"
                    />
                    <div className="p-4 flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-700 mb-4">
                        by {item.author}
                      </p>
                      <p className="text-green-600 mb-4">In Stock</p>
                      <div className="flex items-center mb-4">
                        <label htmlFor={`quantity-${item.bookUuid}`} className="mr-2">Qty:</label>
                        <select
                          id={`quantity-${item.bookUuid}`}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.bookUuid, e.target.value)}
                          className="border rounded-md px-2 py-1"
                        >
                          {[1, 2, 3, 4, 5].map(qty => (
                            <option key={qty} value={qty}>{qty}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-lg text-gray-900 font-semibold">
                          ₹{item.price}
                        </p>
                        <button
                          className="bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold flex items-center"
                          onClick={() => removeFromCart(item.bookUuid)}
                        >
                          <MdRemoveShoppingCart className="h-6 w-6 mr-2" />
                          Remove from Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CartTotal cartItems={cartItems} onPlaceOrder={placeOrder} /> {/* Add the CartTotal component here */}
          </>
        ) : (
          <div className="text-center py-20">
            <img src={emptyCartImage} alt="Empty Cart" className="w-72 h-60 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty.</h2>
            <p className="text-lg text-gray-500 mb-8">Looks like you haven’t added anything to your cart yet</p>
            <button
              className="bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold"
              onClick={() => navigate('/books')}
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ marginTop: '0px' }}
      />
      <Footer1/>
    </>
  );
};

export default Cart;
